import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container mx-auto">
            <img src="https://i.ibb.co/Dg8Cbg7/error-404.png" className="w-8/12 mx-auto" />
            <br />
            <Link to="/home">
                <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-6 border border-blue-700 rounded">Home</button>
            </Link>
        </div>
    );
};

export default NotFound;