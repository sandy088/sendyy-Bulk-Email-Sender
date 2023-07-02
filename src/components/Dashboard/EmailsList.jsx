import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataProvider'
import {HiOutlineMail} from 'react-icons/hi'

export const EmailsList = () => {

    const [selectedOption, setSelectedOtion] = useState('')
    const [selectedEmails, setSelectedEmails] = useState([]);
    const { emailsListNames } = useContext(DataContext)

    const handleOptionChange = (e) => {
        console.log(selectedOption)
        setSelectedOtion(e.target.value)
    }

    // useEffect(() => {
    //     const emailsListName = getEmailList()
    // }, [])

    useEffect(() => {
        // Assuming getEmailList() returns the email list object based on the selectedOption value
        const selectedList = emailsListNames.find((list) => list.name === selectedOption);

        if (selectedList) {
            setSelectedEmails(selectedList.emails);
        } else {
            setSelectedEmails([]);
        }
    }, [selectedOption, emailsListNames]);
    return (
        <div className='relative h-screen w-11/12 mx-auto flex flex-col gap-4 items-center'>
            <div className='lg:h-[100px]'>

            </div>
            <h2 className=' text-white text-3xl mb-10'>Your Emails List</h2>


            <div className='flex flex-wrap gap-4 justify-evenly w-full'>
                {/* left side */}
                <div className='relative px-6 py-6 bg-slate-800 lg:w-[300px] bg-opacity-60 rounded-xl h-fit z-10'>
                    <h2 className=' text-white text-[16px]'>Select Your Email List Name</h2>
                    <select value={selectedOption} onChange={handleOptionChange} className=' rounded-lg bg-[#171e31] text-white p-2 mt-4 w-full'>
                    <option value=''>Select List</option>
                        {
                            emailsListNames.map((List) => {
                                return <option key={List._id} value={List.name}>{List.name}</option>
                            })
                        }


                    </select>
                </div>

                {/* Right Side */}

                <div className='relative px-6 py-6 bg-slate-800 bg-opacity-60 rounded-xl  w-[300px] h-[500px] z-10 '>
                    <h2 className='text-white text-[18px] text-center'>Emails List</h2>
                    <div className='overflow-y-scroll max-h-full'>
                        {selectedEmails[0]? selectedEmails.map((email, index) => (
                            <div key={index} className=' text-gray-300 p-2 rounded-lg hover:bg-slate-700 italic text-[16px] flex gap-3 items-center my-2'> <HiOutlineMail className='text-[20px]'/> {email.length>20? email.substring(0, 20)+'...': email}</div>
                        )):<div className=' mt-6 flex h-full justify-center items-center text-white'>⚠️<p> No Email Lists are selected</p></div>}
                    </div>
                </div>

                <div className=' rounded-full bg-[#9340FF] h-[500px] w-[500px] absolute blur-3xl opacity-30 -top-5 right-[15%] z-[0]'></div>
            </div>
        </div>
    )
}
