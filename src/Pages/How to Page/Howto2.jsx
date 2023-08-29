import React from 'react'
import { HowtoCards } from '../../components/common/HowtoCards'

export const Howto2 = () => {
    return (
        <div className=' overflow-x-hidden'>
            <div className='flex flex-col items-center gap-4 h-screen bg-[#101728] py-5 px-8'>

                <div className='lg:h-[50px]'>

                </div>

                <h2 className=' text-white text-6xl px-4 font-semibold my-4'>How to start?🤔</h2>



                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-8'>

                    <HowtoCards headline={'Setup Gmail for Bulk email sending'} subheadline={'Don’t have paid Email service'} imgUrl={'https://res.cloudinary.com/daqa5apjj/image/upload/v1693316838/Pi-Video_7_bd9fpe.png'} />
                    <HowtoCards headline={'Configure SMTP settings'} subheadline={'Setup SMTP'} imgUrl={'https://res.cloudinary.com/daqa5apjj/image/upload/v1693316838/Pi-Video_8_a0phys.png'}/>
                    <HowtoCards headline={'Create Email List & Start Sending'} subheadline={'Email List Creation'} imgUrl={'https://res.cloudinary.com/daqa5apjj/image/upload/v1693316840/Pi-Video_9_haeub2.png'}/>

                </div>
            </div>
        </div>
    )
}
