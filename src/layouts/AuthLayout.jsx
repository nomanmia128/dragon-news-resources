import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../componenets/Navber';

const AuthLayout = () => {
    return (
        <div className='font-poppins bg-[#F3F3F3] pt-10'>
           <header className='py-5 w-11/12 mx-auto'>
            <Navber></Navber>
           </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;