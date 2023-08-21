import React, { useContext, useEffect, useState } from 'react'

import { Cards } from '../../components/Admin/Cards'
import axios from 'axios'
import { DataContext } from '../../context/DataProvider'
import { LinesChart } from '../../components/Dashboard/LinesChart'

export const Stats = () => {
  const { authToken } = useContext(DataContext)
  const [allUsers, setAllUsers] = useState(0)
  const [tSentEmails, setTotalEmails] = useState(0)
  const [emailLists, setEmailLists] = useState(0)



  const totalUsers = async () => {
    const auth = {
      token: authToken
    }
    const data = await axios.post('https://bulk-email-sender-backend.onrender.com/api/v2/admin/total-users', auth,
      {
        headers: {
          'Content-Type': 'application/json',

        }
      }).then((data) => setAllUsers(data.data.totalUsers)).catch((err) => console.log(err))
    // setAllUsers(data.totalUsers)


  }

  const totalEmails = async() =>{

    const auth = {
      token: authToken
    }
    await axios.post('https://bulk-email-sender-backend.onrender.com/api/v2/admin/total-emails-sent', auth,
    {
      headers: {
        'Content-Type': 'application/json',

      }
    }).then((data)=> setTotalEmails(data.data.totalEmails)).catch((err)=>console.log(err))
  }


  const totalEmailLists = async()=>{
    const auth = {
      token: authToken
    }
    await axios.post('https://bulk-email-sender-backend.onrender.com/api/v2/admin/total-emails-lists', auth,
    {
      headers: {
        'Content-Type': 'application/json',

      }
    }).then((data)=> setEmailLists(data.data.emailsList)).catch((err)=>console.log(err))
  }

  useEffect(() => {
    totalUsers()
    totalEmails()
    totalEmailLists()
  }, [])

  return (
    <div className=' w-screen py-8'>
      <div className=' w-11/12 mx-auto'>

        <div className=' flex justify-start gap-10 flex-wrap'>
          <Cards icon={'User'} text={'Total Users'} value={allUsers} />
          <Cards icon={'Emails'} text={'Total Emails Sent'} value={tSentEmails} />
          <Cards icon={'emailsList'} text={'Total Email Lists'} value={emailLists}/>
        </div>

        <div className=' mt-20 flex justify-around w-[1200px]'>
            <LinesChart number={emailLists} totalNumber={5000} label1='Email Lists Created' label2='Email Lists limit'/>
            <LinesChart number={tSentEmails} totalNumber={5000} label1='Total Email Sent' label2='Email Sent limit'/>
           
        </div>
        <div className=' w-[1200px]'>
          <LinesChart number={allUsers} totalNumber={allUsers} label1='Total Users' label2=''/>
        </div>
        
      </div>
    </div>
  )
}
