import React from 'react';
import { Link } from 'react-router-dom';

const Event = ({event}) => {
    const {_id,tour_location,img,description,price,total_estimate} = event;
    return (
        <div>
            <div className="p-10 h-full">  
                <div className="max-w-sm rounded overflow-hidden shadow-lg h-full">
                <img className="w-full" src={img} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{tour_location} Tour</div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2 ">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price : {price} Taka</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Total Member :{total_estimate}</span>
                    <Link to={`joinevent/${_id}`}>
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">Join Now</button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Event;