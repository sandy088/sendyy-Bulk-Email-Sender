import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserRankBox } from '../../components/Admin/UserRankBox'
import axios from 'axios';
import { DataContext } from '../../context/DataProvider';
import { BarChart } from 'lucide-react';
import { Loader } from '../../components/common/Loader';

export const TopUsers = () => {

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { authToken } = useContext(DataContext)
    const [isLoading, setLoading] = useState(false)

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
        setLoading(true)
        axios.get(`https://bulk-email-sender-backend.onrender.com/api/v2/admin/get-top-users?page=${currentPage}`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        })
            .then(response => {
                setUsers(response.data.data);
                setTotalPages(response.data.totalPages);
                setCurrentPage(response.data.currentPage);
                
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                setLoading(false)
            });

            setLoading(false)
            
    };

    const fetchMoreUsers = () => {
        setLoading(true)
        const nextPage = currentPage + 1;
        axios.get(`https://bulk-email-sender-backend.onrender.com/api/v2/admin/get-top-users?page=${nextPage}`, {
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
        <div className=' flex'>
            <div>
                {/* Stats will be here */}
            </div>
            <div className=' bg-black w-1/3 rounded-3xl py-4 mx-auto my-20'>
                <div className=' text-white flex items-end gap-4 mx-6 mb-6'>
                    <p className=' text-white font-bold text-4xl'>
                        Top Users
                    </p>
                    <BarChart size={'40px'} />
                </div>

                {
                    users.map((user, index) => {
                        return <UserRankBox key={index} Username={user.name} useremail={user.email} totalsent={user.emailsSent} />
                    })
                }

                <div className=' my-3 flex px-7'>
                    <button className='relative w-full  p-2 px-3 bg-gray-100 text-black text-center rounded-xl hover:bg-black hover:text-white hover:scale-105 transition-all duration-200' onClick={fetchMoreUsers}>
                       Load more
                        
                        </button>

                </div>

            </div>
        </div>
    )
}
