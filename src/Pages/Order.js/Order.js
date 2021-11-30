import axios from 'axios';
import React from 'react';

const Order = ({ order }) => {
    const { _id, Name, email, phone, location, address } = order;
    const handleDelete = (id) => {

        axios.delete(`https://aqueous-island-93014.herokuapp.com/deleteorder/${id}`)
            .then(res => {
                const data = res.data;
                if (data.deletedCount > 0) {
                    alert("Deleted Successfully!!!");
                }
            })
    }
    return (
        <tr>
            <td className="p-2 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="font-medium text-gray-800">{Name}</div>
                </div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left">{email}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left font-medium text-green-500">{location}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left font-medium text-green-500">{phone}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left font-medium text-green-500">{address}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <button onClick={() => { handleDelete(_id) }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">delete</button>
            </td>
        </tr>
    );
};

export default Order;
