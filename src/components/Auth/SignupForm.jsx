import React, { useContext } from 'react'
import {DataContext} from '../../context/DataProvider'


export const SignupForm = ({isLogin = false}) => {
    const { onChangeHandler } = useContext(DataContext)

    const onChanging= (e)=>{
        console.log("loginData: ", isLogin)
         isLogin?  onChangeHandler(e, isLogin=true) : onChangeHandler(e,isLogin=false)
    }
    return (
        <div className=' flex flex-col gap-3'>
            <form>
                {!isLogin && <label className='flex flex-col gap-2 text-gray-700'>Name
                    <input type='text' name='name' className=' rounded-lg bg-[#dcdcdc] px-2 py-2' onChange={(e)=> onChanging(e)}/>
                </label>}
                <label className='flex flex-col gap-2'>Email
                    <input type='text' name='email' className=' rounded-lg bg-[#dcdcdc] px-2 py-2' onChange={(e)=> onChanging(e)}/>
                </label>
                <label className='flex flex-col gap-2'>Password
                    <input type='password' name='password' className=' rounded-lg bg-[#dcdcdc] px-2 py-2' onChange={onChanging}/>
                </label>
            </form>

        </div>
    )
}
