import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/DataProvider'

export const SetupSmtp = () => {
    const {setupSMTP,authToken} = useContext(DataContext)
    const [smtpData, setSmtpData] = useState({
        host: "",
        user: "",
        pass: "",
        token: authToken
    })

    const onChanngeHandler = (e) => {
     
        setSmtpData((prevData)=> ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }


    return (
        <div className=''>

            <div className=' lg:mt-[120px]'>
                <h2 className=' text-4xl text-slate-50  text-center'>Setup SMTP</h2>
            </div>

            <div className=' lg:h-[40px]'>

            </div>

            <div className='flex justify-evenly w-11/12 mx-auto mt-6'>


                <div className=' rounded-2xl bg-[#42474D] flex flex-col gap-3 bg-opacity-80 p-6 w-[40%] overflow-hidden'>

                    
                    <form>
                        <label className=' text-white flex flex-col gap-2 '>

                            Enter SMTP Host
                            <input type='text' name='host' placeholder='google.smtp' onChange={onChanngeHandler} className=' bg-[#737373] bg-opacity-50 rounded-lg p-2' />
                        </label>

                        <label className=' text-white flex flex-col gap-2 mt-4'>

                            Enter Username
                            <input type='text' name='user' placeholder='username'onChange={onChanngeHandler} className=' bg-[#737373] bg-opacity-50 rounded-lg p-2' />
                        </label>

                        <label className=' text-white flex flex-col gap-2 mt-4'>

                            Enter Password
                            <input type='text' name='pass' placeholder='password' onChange={onChanngeHandler} className=' bg-[#737373] bg-opacity-50 rounded-lg p-2' />
                        </label>


                    </form>

                    <button className=' flex bg-[#7450BB] rounded-lg px-3 py-2 justify-center mt-4 text-white font-semibold' onClick={()=> setupSMTP(smtpData)}> Setup </button>
                </div>

                <div className='rounded-2xl bg-[#42474D] flex flex-col w-[280px] h-[280px] gap-3 bg-opacity-80 p-6 overflow-hidden'>
                    <h3 className=' text-white text-lg font-semibold text-center'>Tips</h3>
                    <div>
                        <p className=' text-white'>
                            <li>
                                Use a dedicated SMTP server for Bulk Emailing
                            </li>
                            <li>
                           
                                  If you don't know how to setup SMTP, Then refer how to use? Page to know eevrything about it
                                
                            </li>



                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}
