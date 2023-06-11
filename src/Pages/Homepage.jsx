import React from 'react'
import { Navbar } from '../components/common/Navbar'
import { HighlightedText } from '../components/Homepage/HighlightedText'
import { CTAButton } from '../components/core/CTAButton'
import { EmailComponent } from '../components/Homepage/EmailComponent'
import '../Pages/Animation.css'
import send from '../assets/homeImages/send.png'
import statsHome from '../assets/homeImages/statsHome.png'
import statsmail from '../assets/homeImages/statsHome2.png'
import subs from '../assets/homeImages/subscribers.png'

export default function Homepage() {
    return (
        <div className=' h-screen w-screen bg-[#101728] overflow-y-scroll'>
            <Navbar />
            {/* Hero Section */}
            <div className=' h-[60px]'>

            </div>
            <div className=' mx-auto w-11/12'>

                <div className=' flex justify-center mt-16'>

                    {/* Heading */}
                    <h1 className=' text-[50px] font-bold text-white'>Effortlessly Reach <HighlightedText color={"#CB6CE6"} text={"Thousands"} /></h1>
                </div>

                <div className='flex justify-center text-gray-400 mt-4 text-center w-[30%] mx-auto'>
                    <p className='text-center mx-auto text-[20px]'>Power Your Communication with Our Bulk Email Sender Platform!</p>
                </div>

                <div className='flex justify-center gap-4 mt-6'>
                    <CTAButton text={"Try Now - Its Free"} path={"/signup"} isIcon={true} />
                    <CTAButton text={"Signup Now"} path={"/login"} isPurple={false} />
                </div>

                <div className='relative mt-[130px]'>
                    {/* Email Component */}
                    <EmailComponent />

                    {/* overlapping Images */}
                    <img className='absolute left-24 bottom-0 opacity-75 statsHome' src={statsmail} alt='e-mail Status' height={150} width={150} />
                    <img className='absolute right-32 -top-32 statsHome' src={statsHome} alt='e-mail Status' height={150} width={150} />
                    <img className='absolute left-[22%] -top-[18%]' src={send} alt='Email Sent logo' height={200} width={200} />

                    <div className=' rounded-full bg-[#9340FF] h-[700px] w-[700px] absolute blur-3xl opacity-40 -top-5 left-[25%] z-[0]'></div>
                    <div className='circle-animation rounded-full border border-[#9340FF] h-[700px] w-[700px] absolute  opacity-40 -top-5 left-[25%] z-[0]'></div>
                </div>

                {/* Subscribers Section */}
                <div className='h-[150px]'></div>
                <div className='relative flex p-4  items-center justify-around'>
                <div className=' rounded-full bg-[#E899FF] h-[700px] w-[700px] absolute blur-3xl opacity-20 bottom-[-45%] left-[-40%] z-[0]'></div>
                    {/* Left Section */}
                    <div className='flex flex-col gap-5'>
                        <h2 className=' text-5xl text-white font-semibold'>Unlimited <HighlightedText color={"#CB6CE6"} text={"Subscribers"} /> : </h2>
                        <p className=' text-3xl font-semibold text-slate-400 lg:max-w-[400px]'>Amplify Your Reach, Unleash Your Potential</p>
                        <div className='flex gap-6 mt-3'>
                            <CTAButton text={"Try Now - Its Free"} path={"/signup"} isIcon={true} />
                            <CTAButton text={"Signup Now"} path={"/login"} isPurple={false} />
                        </div>

                    </div>

                    {/* Right Section */}
                    <div>
                        <img src={subs} alt='Subscribers' />
                    </div>
                </div>

            </div>
        </div>
    )
}
