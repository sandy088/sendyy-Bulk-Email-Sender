import { ArrowUpRightFromCircle, PieChart, TrendingUp } from 'lucide-react'

import React from 'react'


export const StatsCard = ({headline, value, ispie= false, issend= false, isTrending =false}) => {
    return (

        <div className='  relative'>
            <div className=' h-full rounded-2xl bg-black p-3 px-6 overflow-hidden check group '>
            <div className=' my-6 text-white '>
                <p className=' text-3xl font-semibold w-11/12 text-gray-400'>{headline}</p>
                <p className=' text-4xl mt-4'>{value}</p>

                <div className='absolute right-5 bottom-4 text-7xl'>

                    <TrendingUp size={'100px'} className={` ${isTrending? 'text-green-900 group-hover:text-green-400 group-hover:animate-pulse ' : 'hidden'} `} />
                    <ArrowUpRightFromCircle size={'100px'} className={`${issend? ' text-purple-900 group-hover:text-purple-400 group-hover:animate-pulse': 'hidden'} `}/>
                    <PieChart size={'100px'} className={`${ispie? 'text-yellow-900 group-hover:text-yellow-400 group-hover:animate-pulse':'hidden'} `}/>
                </div>
            </div>



        </div>
        </div>
        

    )
}
