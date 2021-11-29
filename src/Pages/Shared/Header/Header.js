import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const Header = () => {
    const {user, logout} = useAuth();
    return (
        <div className= "bg-blue-300">

            <div className = "container flex mx-auto px-10 py-3 text-lg">
                    <span className="font-semibold text-xl tracking-tight italic">Jovial Trips</span>
                <div className="flex pl-6 mx-auto">
                    <div className="mr-6">
                        <NavLink className="text-black hover:text-white" to="/home">
                            Home
                        </NavLink>
                    </div>
                    <div className="mr-6">
                        <NavLink className="text-black hover:text-white" to="/about">
                            About Us
                        </NavLink>
                    </div>
                    <div className="mr-6">
                        <NavLink className="text-black hover:text-white" to="/contact">
                            Contact
                        </NavLink>
                    </div>
                    {
                        user.email ? 
                    <div className = "flex">
                        <div className="mr-6">
                            <NavLink className="text-black hover:text-white" to="/myorders">
                                My Orders
                            </NavLink>
                        </div>
                        <div className="mr-6">
                            <NavLink className="text-black hover:text-white" to="/manageallorders">
                                Manage All Orders
                            </NavLink>
                        </div>
                        <div className="mr-6">
                            <NavLink className="text-black hover:text-white" to="/addnewservice">
                            Add New Service
                            </NavLink>
                        </div>
                    </div>
                        :""
                    }

                        {
                            user.email ?
                    <div className="mr-6">
                        <button 
                        className="text-black hover:text-white" 
                        onClick = {logout}
                        >
                            Logout
                        </button>
                    </div>
                        :
                    <div className="mr-6">
                        <NavLink className="text-black hover:text-white" to="/login">
                            Login/Register
                        </NavLink>
                    </div>
                        }
                </div>
                    {
                        user.email ? <span className="text-xl pl-auto tracking-tight">{user.displayName}</span>:""
                    }
            </div>
        </div>
    );
};

export default Header;