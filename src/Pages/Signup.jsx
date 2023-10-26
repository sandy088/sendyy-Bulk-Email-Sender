import React, { useContext } from 'react'
import { ArrowRight } from 'lucide-react'
import { DataContext } from '../context/DataProvider'
import { toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/Logos/SendyyLogos.png'

export function SignUpThree({ isLogin = false }) {
    const navigate = useNavigate()

    const { onChangeHandler } = useContext(DataContext)
    const { signupData, authClick, loading } = useContext(DataContext)
    console.log(isLogin)
    const onClickHandler = () => {
        if (!isLogin && (signupData.name.length <= 6 || signupData.email.length <= 6 || signupData.name.length <= 6)) {
            console.log("Toast shown")

            console.log("All the fields length should be greator then 6")
            toast.error("All fields length should be greator then 6")

        } else {
            isLogin ? authClick(isLogin = true) : authClick()
        }

        
    }



    const onChanging = (e) => {
        console.log("loginData: ", isLogin)
        isLogin ? onChangeHandler(e, isLogin = true) : onChangeHandler(e, isLogin = false)
    }

    return (
        <section>
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 bg-[#101728] overflow-y-scroll">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">

                    <div className=' h-[50px]'>

                    </div>

                    <div className="mb-2 flex justify-center">
                        <img src={logo} alt='logo' height={50} width={50}/>
                    </div>
                    <h2 className="text-center text-2xl font-bold leading-tight text-white">
                        {isLogin? 'Sign in to account':'Sign up to create account'}
                        
                    </h2>
                    {
                        isLogin ? (

                            <p className="mt-2 text-center text-sm text-gray-600 ">
                                Don&apos;t have an account?{' '}
                                <Link
                                    to={'/signup'}
                                    className="font-semibold text-white transition-all duration-200 hover:underline"
                                >
                                    Create a free account
                                </Link>
                            </p>
                        ) : (

                            <p className="mt-2 text-center text-base text-gray-500">
                                Already have an account?{' '}
                                <Link
                                    to={'/login'}
                                    className="font-medium text-white transition-all duration-200 hover:underline"
                                >
                                    Sign In
                                </Link>
                            </p>

                        )
                    }

                    <form action="#" method="POST" className="mt-8">
                        <div className="space-y-5">
                            {
                                isLogin ? (<></>) : (
                                    <div className="mt-2"><div>
                                    <label htmlFor="name" className="text-base font-medium text-gray-100">
                                        {' '}
                                        Full Name{' '}
                                    </label>

                                </div>
                                        <input
                                            className="flex h-10 text-white w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Full Name"
                                            id="name"
                                            name='name'
                                            onChange={onChanging}
                                        ></input>
                                    </div>
                                )
                            }

                            <div>
                                <label htmlFor="email" className="text-base font-medium text-gray-100">
                                    {' '}
                                    Email address{' '}
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full text-white rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="email"
                                        placeholder="Email"
                                        id="email"
                                        name='email'
                                        onChange={onChanging}
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="text-base font-medium text-gray-100">
                                        {' '}
                                        Password{' '}
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        className="flex text-white h-10 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="password"
                                        placeholder="Password"
                                        id="password"
                                        name='password'
                                        onChange={onChanging}
                                    ></input>
                                </div>
                            </div>
                            <div>
                                {
                                    isLogin ? (
                                        <button
                                            onClick={onClickHandler}
                                            type="button"
                                            className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                        >
                                            Sign in to Account <ArrowRight className="ml-2" size={16} />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={onClickHandler}
                                            type="button"
                                            className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                        >
                                            Create Account <ArrowRight className="ml-2" size={16} />
                                        </button>
                                    )
                                }

                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>
        </section>
    )
}
