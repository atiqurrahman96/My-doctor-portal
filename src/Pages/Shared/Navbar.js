import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    // we can declare a variable when we get same things many places such as menuitems
    // if we would like to implement custom link only , we  can use navlink for implementing custom link because of using tailwind css 
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    const menuitems = <>
        <li>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/appointments">Appointments</NavLink>
            <NavLink to="/reviews">Reviews</NavLink>
            <NavLink to="/contact">Contact us</NavLink>
            {user ?
                <button onClick={logout} className="btn btn-active btn-link ">Sign out</button> :
                <NavLink to="/login">Log In</NavLink>}
        </li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuitems}

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Doctors Portals</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 ">

                        {menuitems}


                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;