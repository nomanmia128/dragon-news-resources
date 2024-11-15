import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'

const Navber = () => {
    return (
        <div className='flex justify-between'>
            <div className=""></div>
            <div className="nav space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div>
                    <img src={userIcon} alt="" />
                </div>
                <button className='btn btn-neutral rounded-none px-6'>Login</button>
            </div>
        </div>
    );
};

export default Navber;