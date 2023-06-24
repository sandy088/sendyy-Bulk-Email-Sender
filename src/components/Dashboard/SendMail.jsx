import React, { useContext, useState } from 'react'

import profile from '../../assets/Profilepics/profile.png'
import { QuilText } from './QuilText'
import { DataContext } from '../../context/DataProvider'

import { IoSend } from 'react-icons/io5'
import axios from 'axios'
import { toast } from 'react-hot-toast'

export const SendMail = () => {

  const [subject, setSubject] = useState('')
  const [from, setFrom] = useState('')
  const [selectedOption, setSelectedOtion] = useState('')
  const { mailContent, emailsListNames, authToken } = useContext(DataContext)



  // function onchano() {
  //   console.log(from)
  //   console.log(subject)

  // }

  // onchano()

  const onSendHandler = async () => {
    const data = {
      from: from,
      emailName: selectedOption,
      subject: subject,
      body: mailContent,
      token: authToken
    }


    
    const sentData = axios.post('http://localhost:4000/api/v2/sendMail', data, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(() => {
      // toast.success("Mail Sent Successfully✅")
      
      console.log("Email Sent Successfully")
    }).catch((error) => {
      // toast.error("Mail not sent")
      
      console.log("Error occured while sending mail ", error)
    })

    toast.promise(sentData, {
      loading: 'Sending Mail',
      success: 'Mail Sent Successfully',
      error: 'Error when Sending Mail',
    });
  }

  const handleOptionChange = (e) => {
    console.log(selectedOption)
    setSelectedOtion(e.target.value)
  }
  return (
    <div className=''>
      <div className=' lg:h-[150px]'>

      </div>

      <div>

        <div className='relative file:flex flex-col rounded-3xl bg-slate-200 gap-3 lg:w-[600px] mx-auto p-3 z-[10] shadow-custom'>

          {/* 1st part */}
          <div className='flex flex-row-reverse gap-3 pt-3'>
            <div className=' mr-4 flex gap-2'>
              <div className='rounded-full bg-orange-600 h-[20px] w-[20px]'></div>
              <div className='rounded-full bg-green-600 h-[20px] w-[20px]'></div>
              <div className='rounded-full bg-yellow-600 h-[20px] w-[20px]'></div>
            </div>

          </div>

          <div className=' px-4 py-2 flex gap-4 '>
            <span className=' text-gray-400 font-semibold'>From:</span> <img src={profile} alt='email pic' width={30} height={20} /> <input placeholder='your Name' value={from} onChange={(e) => setFrom(e.target.value)} className=' pr-2 py-1 bg-transparent rounded-lg w-[95%]' />
          </div>
          <div className='h-[0.5px] bg-slate-300 w-[95%] mx-auto'></div>
          <div className=' px-4 py-2 flex gap-4 justify-between'>
            <input placeholder='Enter Subject' value={subject} onChange={(e) => setSubject(e.target.value)} className=' pr-2 py-1 bg-transparent rounded-lg w-[95%]' />
            <div>
              <select value={selectedOption} onChange={handleOptionChange} className=' rounded-lg bg-[#d9d9d9] text-gray-600 p-2 mt-4 w-full'>
                <option value=''>Select List</option>
                {
                  emailsListNames.map((List) => {
                    return <option key={List._id} value={List.name}>{List.name}</option>
                  })
                }


              </select>
            </div>
          </div>
          <div className='h-[0.5px] bg-slate-300 w-[95%] mx-auto'></div>

          <div>
            <QuilText />
          </div>
          <div className=' flex items-center justify-end mt-1 mb-2 w-[97.5%]'>
            <button onClick={onSendHandler} className=' bg-[#7450BB] px-3 py-1 text-white rounded-md flex items-center gap-2'>Send <IoSend /></button>
          </div>
        </div>

        <div className=' rounded-full bg-[#9340FF] h-[500px] w-[500px] absolute blur-3xl opacity-30 -top-5 right-[15%] z-[0]'></div>
      </div>
    </div>
  )
}
