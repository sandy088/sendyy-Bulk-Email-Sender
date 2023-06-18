import React, { useContext } from 'react'
import logo from '../assets/AuthImages/Logo.png'
import security from '../assets/AuthImages/Security.png'
import { AuthForm} from '../components/Auth/SignupForm'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import { HighlightedText } from '../components/Homepage/HighlightedText'
import { Link } from 'react-router-dom'
import { DataContext } from '../context/DataProvider'
import { toast } from 'react-hot-toast'

export const AuthPage = ({isLogin = false}) => {
  const { signupData, loginData, authClick } = useContext(DataContext)
console.log(isLogin)
  const onClickHandler = () => {
    if(!isLogin && (signupData.name.length <= 6 ||signupData.email.length <= 6 || signupData.name.length <= 6) ){
      console.log("Toast shown")
      
      console.log("All the fields length should be greator then 6")
      toast.error("All fields length should be greator then 6")
      
    }else{
      isLogin? authClick(isLogin = true) : authClick()
    }
  }

  return (
    <div className='h-screen w-screen bg-[#101728] flex justify-center items-center relative'>
      <div className=' rounded-full bg-[#9340FF] h-[700px] w-[700px] absolute blur-3xl opacity-30 -top-5 left-[25%] z-[0]'></div>
      <div className='relative bg-[#EFEFEF]  p-4 rounded-2xl shadow-custom z-[10]'>

        {/* For Logo and heading */}
        <div className='flex justify-center items-center flex-col'>
          <img src={security} alt='sendyy logo' loading='lazy' height={30} width={30} />
          <h2 className=' text-xl font-sans font-semibold'>Register Now</h2>
        </div>

        {/* for signupForm and side logo */}
        <div className='flex gap-8 justify-between '>
          {isLogin? <AuthForm isLogin={true}/>: <AuthForm isLogin={false}/>}
          <div className='flex flex-col justify-end gap-5 items-center'>
            <img src={logo} alt='security logo' loading='lazy' height={80} width={60} className=' animate-bounce' />

            <button className={` flex items-center gap-2 rounded-lg  bg-[#7450BB] text-white px-4 py-2 hover:bg-[#4f3485]
             hover:text-white transition-color duration-150 relative z-[10]`} onClick={onClickHandler}>
           {isLogin?'Login' : ' Signup Now'} 
            <BsFillArrowRightCircleFill />
        </button>

          </div>

        </div>

        {/* third section */}
        <div className=' flex justify-center mt-6 '>
          <p>Already have an account? <Link to={'/login'}><HighlightedText text={'Login Now'} /></Link> </p>
        </div>
      </div>
    </div>
  )
}
