import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../../public/assets/logo.png';
import { FaUser } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className='bg-primary min-h-screen w-52 text-white flex flex-col'>
            <div className="flex gap-2 items-center mt-4 ml-4">
                <Image src={logo} height={35} width={35} alt='logo' />
                <Link href={`/`} className=" text-2xl font-bold">
                    <cite>
                        <span className='text-white'>Fini<span className="text-secondary">Hub</span></span>
                    </cite>
                </Link>
            </div>
            <div className='ml-4'>
                <Link href={'/dashboard/manage-users'} className='menu  font-bold flex gap-2 flex-row items-center'>
                    <FaUser />
                    <span>Users</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;