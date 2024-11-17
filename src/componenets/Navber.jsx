import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';


const Navber = () => {

    const {user,  logOut} = useContext(AuthContext);

    return (
        <div className='flex justify-between'>
            <div className="">{user && user.email}</div>
            <div className="nav space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div>
                    <img src={userIcon} alt="" />
                </div>
                {
                    user && user?.email ? (
                        <button onClick={logOut} className='btn btn-neutral
                         rounded-none px-6'>Log-Out</button>
                    ) :
                
               ( <Link to="/auth/login"
                 className='btn btn-neutral rounded-none px-6'>Login</Link>
                )}
            </div>
        </div>
    );
};

export default Navber;