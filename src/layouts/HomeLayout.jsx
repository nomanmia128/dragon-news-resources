import React from 'react';
import Header from '../componenets/Header';
import LatestNews from '../componenets/LatestNews';
import Navber from '../componenets/Navber';
import LeftNavber from '../componenets/layout-component/LeftNavber';
import RightNav from '../componenets/layout-component/RightNav';

import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>

            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>

            <nav className='w-11/12 mx-auto py-4'>
                <Navber></Navber>
            </nav>

            <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3'>
                <aside className='left col-span-3'>
                    <LeftNavber></LeftNavber>
                </aside>
                <section className='col-span-6'>
                   <Outlet></Outlet>
                </section>
                <aside className='left col-span-3'>
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;