import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Order from '../Order.js/Order';
import useAuth from '../Shared/hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        axios.get(`https://aqueous-island-93014.herokuapp.com/orders?email=${user?.email}`)
            .then(res => {
                setOrders(res.data);
            })
    }, [user]);




    return (
        <div>
            <section className="antialiased bg-gray-100 text-gray-600 py-4 px-4">
                <div className="flex flex-col justify-center h-full">

                    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header className="px-5 py-4 border-b border-gray-100">
                            <h2 className="font-semibold text-gray-800">My Bookings</h2>
                        </header>
                        <div className="p-3">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Name</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Email</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Tour Location</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Country</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Phone</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Address</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                        {
                                            orders.map(order => <Order
                                                key={order._id}
                                                order={order}
                                            ></Order>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyOrders;