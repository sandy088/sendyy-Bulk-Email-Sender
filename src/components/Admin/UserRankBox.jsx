
import React from 'react'


export const UserRankBox = ({Username, useremail, totalsent}) => {



    return (
        <div className='px-6 my-4  mx-auto'>
            
            <div className='rounded-xl bg-[#1c1c1c] bg-opacity-50 flex justify-between py-6 px-4 text-white gap-6 hover:bg-green-800 transition-colors duration-400'>

                <div className=' text-sm px-2 text-start'>
                    {Username}
                </div>

                <div className=' text-sm px-2 text-end font-bold'>
                    {totalsent}
                </div>

                {/* <div className=' text-sm px-2 text-start'>
                    {useremail}
                </div> */}

                

            </div>
        </div>
    )
}
