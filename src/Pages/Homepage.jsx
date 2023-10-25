import React from 'react'

import { HighlightedText } from '../components/Homepage/HighlightedText'
import { CTAButton } from '../components/core/CTAButton'
import { EmailComponent } from '../components/Homepage/EmailComponent'
import '../Pages/Animation.css'
import send from '../assets/homeImages/send.png'
import statsHome from '../assets/homeImages/statsHome.png'
import statsmail from '../assets/homeImages/statsHome2.png'
import subs from '../assets/homeImages/subscribers.png'
import pgmail from '../assets/homeImages/pgmail.png'
import inbox from '../assets/homeImages/inbox.png'
import skyroket from '../assets/homeImages/skyroket.png'
import { FooterFour } from '../components/common/Footer'
import { Footer } from '../components/common/Footer2'

export default function Homepage() {
    return (
        <div className=' h-screen w-screen bg-[#101728] overflow-y-scroll overflow-x-hidden'>
            {/* <Navbar /> */}
            {/* Hero Section */}
            <div className=' h-[60px]'>

            </div>
            <div className=' mx-auto w-11/12 max-w-[1200px]'>

                <div className="flex flex-col items-center mt-16">
                    {/* Heading */}
                    <h1 className="text-4xl text-center md:text-5xl lg:text-6xl font-bold text-white">
                        Effortlessly Reach{" "}
                        <HighlightedText color="#CB6CE6" text="Thousands" />
                    </h1>
                </div>

                <div className="flex justify-center text-gray-400 mt-4 text-center w-11/12 md:w-3/5 mx-auto">
                    <p className="text-lg md:text-xl">
                        Power Your Communication with Our Bulk Email Sender Platform!
                    </p>
                </div>

                <div className="flex justify-center gap-4 mt-6">
                    <CTAButton text="Try Now - It's Free" path="/signup" isIcon={true} />
                    <CTAButton text="Signup Now" path="/login" isPurple={false} />
                </div>


                <div className='relative mt-[130px]'>
                    {/* Email Component */}
                    <EmailComponent />

                    {/* overlapping Images */}
                    <img className='absolute invisible lg:visible left-24 bottom-0 opacity-75 statsHome' src={statsmail} alt='e-mail Status' height={150} width={150} />
                    <img className='absolute invisible lg:visible right-32 -top-32 statsHome' src={statsHome} alt='e-mail Status' height={150} width={150} />
                    <img className='absolute invisible lg:visible left-[22%] -top-[18%]' src={send} alt='Email Sent logo' height={200} width={200} />

                    <div className=' rounded-full bg-[#9340FF] h-[700px] w-[700px] absolute blur-3xl opacity-30 -top-5 left-[25%] z-[0]'></div>
                    <div className='circle-animation rounded-full border border-[#9340FF] h-[700px] w-[700px] absolute  opacity-40 -top-5 left-[25%] z-[0]'></div>
                </div>

                {/* Subscribers Section */}
                <div className="h-20 lg:h-40 xl:h-50"></div>
                <div className="relative flex flex-col-reverse md:flex-row p-4 w-11/12 mx-auto items-center justify-between">
                    <div className="rounded-full bg-[#E899FF] h-3/4 md:h-[700px] w-3/4 md:w-[700px] absolute blur-3xl opacity-10 bottom-[-45%] left-[-40%] z-[0]"></div>

                    {/* Left Section */}
                    <div className="flex flex-col gap-5 md:w-1/2">
                        <h2 className="text-4xl md:text-5xl text-white font-semibold">Unlimited <HighlightedText color={"#CB6CE6"} text={"Subscribers"} />:</h2>
                        <p className="text-xl md:text-3xl font-semibold text-slate-400 md:max-w-[400px]">Amplify Your Reach, Unleash Your Potential</p>
                        <div className="flex gap-6 mt-3">
                            <CTAButton text={"Try Now - It's Free"} path={"/signup"} isIcon={true} />
                            <CTAButton text={"Signup Now"} path={"/login"} isPurple={false} />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="md:w-1/2">
                        <img src={subs} alt="Subscribers" />
                    </div>
                </div>


                <div className="flex flex-col items-center justify-center mt-16">
                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center lg:w-3/4">
                        Connect with Gmail and Use <HighlightedText color={"#CB6CE6"} text={"Power"} /> of Bulk E-mailing
                    </h1>

                    <div className="text-gray-400 mt-4 text-center w-11/12 md:w-3/4 lg:w-2/5 mx-auto mb-8">
                        <p className="text-lg md:text-xl lg:text-2xl text-center">
                            Send unlimited Free E-mails to all your subscribers in one click
                        </p>
                    </div>

                    <img src={pgmail} alt="Power of Gmail" className="w-11/12 md:w-[44rem]" />
                </div>


                <div className="h-20 lg:h-20"></div>
                <div className="flex flex-col p-4 w-11/12 mx-auto items-center justify-between lg:flex-row lg:gap-8">
                    {/* Left Section */}
                    <div className="flex flex-col gap-5">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold lg:max-w-md">
                            Be Present in <HighlightedText color={"#CB6CE6"} text={"Everyone's"} /> Inbox:
                        </h2>
                        <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-400 lg:max-w-lg">
                            From Spam Folder to Prime Real Estate: Ensure Your Emails Are Seen
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className="relative flex justify-center lg:justify-end">
                        <img src={inbox} alt="inbox" className="w-full max-w-lg lg:w-[39rem] lg:h-auto relative z-10 statsHome" />
                        <div className="rounded-full bg-gray-300 h-96 w-96 absolute blur-3xl opacity-20 top-0 right-[-15%] z-0 "></div>
                    </div>
                </div>

                <div className="h-20 lg:h-20"></div>
                <div className="flex  p-4 items-center justify-between w-11/12 mx-auto flex-col-reverse lg:flex-row lg:gap-8">
                    {/* Right Section */}
                    <div className="relative">
                        <img src={skyroket} alt="skyrocket your sales" className="relative z-10 w-full max-w-lg lg:w-auto lg:h-auto" />
                        <div className="rounded-full bg-purple-700 h-96 w-96 absolute blur-3xl opacity-20 top-0 right-[-15%] z-0 "></div>
                    </div>

                    {/* Left Section */}
                    <div className="flex flex-col gap-5">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold lg:max-w-md">
                            <HighlightedText color={"#CB6CE6"} text={"Skyrocket"} /> Your Revenue:
                        </h2>
                        <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-400 lg:max-w-lg">
                            Harness the Potential of Email Marketing
                        </p>
                    </div>
                </div>



                <div className="h-20 lg:h-20"></div>
                <div className="text-center text-white p-3 mt-7">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                        <HighlightedText color={"#CB6CE6"} text={"Supercharge"} /> Your Email Marketing <br /> Today for Free!
                    </h1>
                    <div className="mt-4 text-center w-4/5 mx-auto">
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-400">
                            Transform your email campaigns from ordinary to extraordinary. Start leveraging the power of our Bulk Email Sender Online Tool to engage your audience, boost sales, and achieve remarkable results.
                        </p>
                    </div>
                    <div className="flex gap-6 justify-center mt-8">
                        <CTAButton text={"Try Now - Its Free"} path={"/signup"} isIcon={true} />
                        <CTAButton text={"Signup Now"} path={"/login"} isPurple={false} />
                    </div>
                </div>
                <div className="h-20 lg:h-20"></div>


            </div><Footer />
        </div>
    )
}
