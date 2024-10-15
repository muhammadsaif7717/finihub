"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import logo from '../../../../public/assets/logo.png';
import ThemeToggle from '@/components/Shared/ThemeToggle/ThemeToggle';


const Navbar = () => {
    const pathName = usePathname();
    const links = <div className='rounded-xl p-4 lg:p-0 dark:bg-primary dark:text-white font-semibold uppercase flex flex-col lg:flex-row gap-5'>
        <Link href={`/`} className={`${pathName === '/' && 'text-secondary'}`}>Home</Link>
        <Link href={`/about`} className={`${pathName === '/about' && 'text-secondary'}`}>About</Link>
        <Link href={`/dashboard`} className={`${pathName === '/dashboard' && 'text-blue-400'}`}>Dashboard</Link>
        <Link href={`/contact`} className={`${pathName === '/contact' && 'text-blue-400'}`}>Contact</Link>
    </div>
    return (
        <div className="navbar flex justify-evenly bg-base-100 dark:bg-[#00283A] bg-opacity-80 fixed max-w-screen-2xl mx-auto  z-50 rounded-xl shadow-lg">
            <div className="">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className=" lg:hidden mr-4 scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[1] shadow-xl w-34 rounded-box">
                        {links}
                    </ul>
                </div>
                <div className="flex gap-[6px] items-center">
                    <Image src={logo} height={35} width={35} alt='logo' />
                    <Link href={`/`} className=" text-2xl font-bold">
                        <cite>
                            <span className='text-primary dark:text-white'>Fini<span className="text-secondary">Hub</span></span>
                        </cite>
                    </Link>
                </div>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="gap-5">
                <ThemeToggle />
                <Link href={'/login'}>
                    <button className='btn btn-primary bg-secondary border-none hover:bg-blue-500 rounded-xl'>Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;