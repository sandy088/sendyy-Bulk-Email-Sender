import React, { useContext } from 'react'
import {DataContext} from '../../context/DataProvider'


export const SignupForm = () => {
    const { onChangeHandler } = useContext(DataContext)

    return (
        <div className=' flex flex-col gap-3'>
            <form>
                <label className='flex flex-col gap-2 text-gray-700'>Name
                    <input type='text' name='name' className=' rounded-lg bg-[#dcdcdc] px-2 py-2' onChange={(e)=> onChangeHandler(e)}/>
                </label>
                <label className='flex flex-col gap-2'>Email
                    <input type='text' name='email' className=' rounded-lg bg-[#dcdcdc] px-2 py-2' onChange={(e)=> onChangeHandler(e)}/>
                </label>
                <label className='flex flex-col gap-2'>Password
                    <input type='password' name='password' className=' rounded-lg bg-[#dcdcdc] px-2 py-2' onChange={onChangeHandler}/>
                </label>
            </form>

        </div>
    )
}
