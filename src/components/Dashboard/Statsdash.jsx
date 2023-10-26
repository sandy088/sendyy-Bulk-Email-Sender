import React, { useContext } from 'react'
import { Cards } from '../Admin/Cards'
import { LinesChart } from './LinesChart'
import { DataContext } from '../../context/DataProvider'

export const Statsdash = () => {


  const {userEmailsSent, userEmaillistCount} = useContext(DataContext)

  return (
    <div className=' py-12'>
        <div className=' lg:h-[50px]'>

        </div>
      <div className=' w-11/12 mx-auto'>

        <div className=' flex justify-around gap-10 flex-wrap'>
          {/* <Cards icon={'User'} text={'Total Users'} value={55} /> */}
          <Cards icon={'Emails'} text={'Total Emails Sent'} value={userEmailsSent} />
          <Cards icon={'emailsList'} text={'Total Email Lists'} value={userEmaillistCount}/>
        </div>

        <div className=' lg: h-[50px]'>

        </div>

        <div className=' my-10 flex'>
            <LinesChart number={userEmaillistCount} totalNumber={5000} label1='Email Lists Created' label2='Email Lists limit'/>
            <LinesChart number={userEmailsSent} totalNumber={5000} label1='Total Email Sent' label2='Email Sent limit'/>
        </div>


      </div>
    </div>
  )
}
