import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';


function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
    };

    const sr = ScrollReveal({
        distance: '60px',
        duration: 2800,
        delay: 500
    })

    const className = [
        '.text-signin', '.box-login', '.form-controls', '.label-input',
        '.checkbox-rem', '.button', '.signup'
    ]

    useEffect(() => {
        sr.reveal(className.join(", "), {
            origin: 'top',
            duration: 500,
            interval: 100
        })
    }, [])

    return (
        <div className="container mx-auto py-9 font-roboto h-screen w-screen flex items-center relative">
            <div className="absolute w-24 h-20 top-0 left-0 py-3 px-3">
                <Link className="text-xl font-light text-indigo-400" to="/"><i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Back </Link>
            </div>
            <div className="box-login flex flex-col items-center bg-white mx-auto w-96 p-8 shadow-lg rounded-lg overflow-hidden">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <p className="text-4xl font-light text-center text-signin uppercase">Register</p>
                    <div className="flex flex-col w-80 mt-10">
                        <label htmlFor="fullname" className="label-input font-medium text-xs">Full Name</label>
                        <input type="text"
                            {...register("fullname", {
                                required: true,
                            })}
                            className={`form-controls p-2 mt-2 text-sm border ${errors.fullname ? 'border-red-500' : 'border-indigo-500'} rounded focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent`} />
                        {errors.fullname && <p className="text-xs text-red-500 font-light mt-2">This field is required</p>}
                    </div>

                    <div className="flex flex-col w-80 mt-5">
                        <label htmlFor="username" className="label-input font-medium text-xs">Username</label>
                        <input type="text"
                            {...register("username", {
                                required: true,
                            })}
                            className={`form-controls p-2 mt-2 text-sm border ${errors.username ? 'border-red-500' : 'border-indigo-500'} rounded focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent`} />
                        {errors.username && <p className="text-xs text-red-500 font-light mt-2">This field is required</p>}
                    </div>

                    <div className="flex flex-col w-80 mt-5">
                        <label htmlFor="password" className="label-input font-medium text-xs">Password</label>
                        <input type="password"
                            {...register("password", {
                                required: true,
                            })}
                            className={`form-controls p-2 mt-2 text-sm border ${errors.password ? 'border-red-500' : 'border-indigo-500'} rounded focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent`} />
                        {errors.password && <p className="text-xs text-red-500 font-light mt-2">This field is required</p>}
                    </div>
                    
                    <div className="flex flex-col w-80 mt-5">
                        <label htmlFor="confirmpassword" className="label-input font-medium text-xs">Confirm Password</label>
                        <input type="confirmpassword"
                            {...register("confirmpassword", {
                                required: true,
                            })}
                            className={`form-controls p-2 mt-2 text-sm border ${errors.confirmpassword ? 'border-red-500' : 'border-indigo-500'} rounded focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent`} />
                        {errors.confirmpassword && <p className="text-xs text-red-500 font-light mt-2">This field is required</p>}
                    </div>

                    <div className="flex justify-start items-center w-full mt-3">
                        <input type="checkbox" name="forgot" id=""  {...register("forgot")} className="checkbox-rem" />
                        <span className="text-xs ml-3 checkbox-rem">Remember Me</span>
                    </div>

                    <button type="submit" className="button bg-indigo-500 hover:bg-indigo-800 p-2 w-full mt-5 text-white text-sm rounded shadow-md">Sign Up</button>
                    <div className="flex justify-center mt-2">
                        <Link to="/login" className="text-center mt-2 text-sm font-light hover:text-blue-600">Have an account? Sign In</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
