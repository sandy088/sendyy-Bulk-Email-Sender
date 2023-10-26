import { ArrowRight } from 'lucide-react'
import React from 'react'

export const HowtoCards = ({ bgColor = 'bg-[#fff]', headline, subheadline, imgUrl, link = 'https://devcom.tech' }) => {
    return (
        <div>
            <div className={`z-10 relative shadow-[0_35px_60px_-15px_rgba(160,138,256,0.7)] group flex flex-col gap-4 items-center justify-center rounded-3xl ${bgColor} p-4 w-fit max-w-[300px] hover:scale-105 transition-all duration-300`}>
                
                
                
                <div className={` h-full w-full absolute ${bgColor} group-hover:scale-105 rounded-3xl bg-opacity-60 -z-10 transition-transform duration-300`}></div>
                
                
                <div className=' flex justify-start w-full'>
                    <p className=' bg-[#b4aaf0] px-3 py-1 rounded-full text-start'>
                        {subheadline}
                    </p>
                </div>


                <p className=' text-3xl font-semibold'>
                    {headline}
                </p>
                <div>
                    <img src={imgUrl} alt="card" height={200} width={200} />
                </div>

                <div className='flex w-full justify-between items-center p-4'>

                    <p>
                        How to do?
                    </p>
                    <div className=' bg-[#c1aaf0] px-4 py-2 rounded-3xl cursor-pointer' onClick={() => window.open(link, 'blank')}>
                        <ArrowRight />
                    </div>

                </div>

            </div>
        </div>
    )
}
