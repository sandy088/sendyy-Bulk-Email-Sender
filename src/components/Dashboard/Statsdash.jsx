import React from 'react'
import { Cards } from '../Admin/Cards'
import { LinesChart } from './LinesChart'

export const Statsdash = () => {
  return (
    <div className=' py-12'>
        <div className=' lg:h-[50px]'>

        </div>
      <div className=' w-11/12 mx-auto'>

        <div className=' flex justify-around gap-10 flex-wrap'>
          {/* <Cards icon={'User'} text={'Total Users'} value={55} /> */}
          <Cards icon={'Emails'} text={'Total Emails Sent'} value={66} />
          <Cards icon={'emailsList'} text={'Total Email Lists'} value={77}/>
        </div>

        <div className=' lg: h-[50px]'>

        </div>

        <div className=' my-10'>
            <LinesChart/>
        </div>


      </div>
    </div>
  )
}
