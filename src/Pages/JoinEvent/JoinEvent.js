import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../Shared/hooks/useAuth';

const JoinEvent = () => {
    const { id } = useParams();
    const [event, setEvent] = useState({});
    const { user } = useAuth();

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        axios.post('https://aqueous-island-93014.herokuapp.com/booking', data)
            .then(res => {
                reset();
            });
    };


    useEffect(() => {
        fetch(`https://aqueous-island-93014.herokuapp.com/event/${id}`)
            .then(res => res.json())
            .then(data => setEvent(data));
    }, [])
    return (
        <div>

            <h2 className="font-semibold text-blue-600 text-5xl py-8">Booking Tour for {event.tour_location}</h2>

            <div className="container mx-auto flex justify-center">
                <div className="p-10 h-full">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg h-full">
                        <img className="w-full" src={event.img} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{event.tour_location} Tour</div>
                            <p className="text-gray-700 text-base">
                                {event.description}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2 ">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price : {event.price} Taka</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Total Member :{event.total_estimate}</span>
                        </div>
                    </div>
                </div>

                <form className="w-full max-w-lg p-8 mt-8" onSubmit={handleSubmit(onSubmit)}>

                    <input className="my-2 appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Name" defaultValue={user.displayName} {...register("Name", { required: true })} />
                    {errors.Name && <span className="text-red-600">Name field is required</span>}

                    <input className="my-2 appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="email" placeholder="E-mail" defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-600">E-mail field is required</span>}

                    <input className="my-2 appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Tour Location" defaultValue={event.tour_location} {...register("location", { required: true })} />
                    {errors.tour_location && <span className="text-red-600">Location field is required</span>}

                    <input className="my-2 appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="number" placeholder="Phone" {...register("phone", { required: true })} />
                    {errors.phone && <span className="text-red-600">Phone field is required</span>}

                    <input className="my-2 appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Address" {...register("address", { required: true })} />
                    {errors.address && <span className="text-red-600">Address field is required</span>}



                    <br />
                    <input className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold mt-4 py-2 px-6 rounded" type="submit" value="Book Now" />
                </form>
            </div>

        </div>
    );
};

export default JoinEvent;
