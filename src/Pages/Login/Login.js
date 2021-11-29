import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Shared/hooks/useAuth';


const Login = () => {
    const { googleSignIn,setIsLoading} = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin =()=>{
        googleSignIn()
        .then((result) => {
            history.push(redirect_uri)
        })
        .finally(()=>setIsLoading(false));
    }

    return (
        <div className="mt-20">
            <button 
            onClick={handleGoogleLogin}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Sign in with Google
            </button>

        </div>
    );
};

export default Login;