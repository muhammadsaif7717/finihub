import Link from 'next/link';
import React from 'react';

const loginPage = () => {
    return (
        <div className="hero bg-base-200 min-h-screen  dark:bg-background dark:text-white">
            <div className="hero-content flex-col gap-10">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card dark:bg-primary bg-base-100 w-full md:w-96 max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="dark:bg-background input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="dark:bg-background input input-bordered" required />
                            <label className="label">
                                <a href="#" className="dark:text-white label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button className="'btn btn-primary bg-secondary border-none hover:bg-blue-500 rounded-xl py-3">Login</button>
                        </div>
                        <div className='mt-3 text-center'>
                            <span>Have no account? please <Link href={'/register'} className='text-secondary font-semibold'>Register</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default loginPage;