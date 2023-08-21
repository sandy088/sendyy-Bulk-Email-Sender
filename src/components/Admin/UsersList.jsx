import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import { DataContext } from '../../context/DataProvider';

export function UsersList() {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { authToken } = useContext(DataContext)

    const sentinelRef = useRef(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, { threshold: 1 });
        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }
        return () => {
            if (sentinelRef.current) {
                observer.unobserve(sentinelRef.current);
            }
        };
    }, [users]);

    const handleObserver = (entries) => {
        const target = entries[0];
        if (target.isIntersecting && currentPage < totalPages) {
            fetchMoreUsers();
        }
    };

    const fetchUsers = () => {
        axios.get(`https://bulk-email-sender-backend.onrender.com/api/v2/admin/all-users?page=${currentPage}`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        })
            .then(response => {
                setUsers(response.data.data);
                setTotalPages(response.data.totalPages);
                setCurrentPage(response.data.currentPage);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    };

    const fetchMoreUsers = () => {
        const nextPage = currentPage + 1;
        axios.get(`https://bulk-email-sender-backend.onrender.com/api/v2/admin/all-users?page=${nextPage}`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        })
            .then(response => {
                setUsers([...users, ...response.data.data]);
                setCurrentPage(nextPage);
            })
            .catch(error => {
                console.error('Error fetching more user data:', error);
            });
    };

    return (
        <>
            <section className="mx-auto w-full max-w-7xl px-4 py-4">
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-100">All Users</h2>
                        <p className="mt-1 text-sm text-gray-400">
                            This is a list of all Users. You can add new users, edit or delete existing ones.
                        </p>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Add new employee
                        </button>
                    </div>
                </div>
                <div className="mt-6 flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-900 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-600">
                                    <thead className="bg-black">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-100"
                                            >
                                                <span>Name</span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-12 py-3.5 text-left text-sm font-normal text-gray-100"
                                            >
                                                Emails
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-100"
                                            >
                                                Emails Sent
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-100"
                                            >
                                                Role
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-right text-sm font-normal text-gray-100"
                                            >
                                                Emails List
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-800 bg-black">
                                        {users.map((user) => (
                                            <tr key={user._id}>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-200">{user.name}</div>
                                                            <div className="text-sm text-gray-200"></div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-12 py-4">
                                                    <div className="text-sm text-gray-200">{user.email}</div>
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-200">
                                                    {user.emailsSent}
                                                </td>

                                                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-200">
                                                    {user.role}
                                                </td>


                                                <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium text-gray-200">
                                                    {user.lists.length}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className=' my-3 flex justify-center'>
                                <button className='  p-2 px-3 bg-gray-100 text-black text-center mx-auto rounded-xl hover:bg-black hover:text-white hover:scale-105 transition-all duration-200' onClick={fetchMoreUsers}>Load more</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
