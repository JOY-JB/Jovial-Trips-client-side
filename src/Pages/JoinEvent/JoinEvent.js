import React, { useEffect,useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../Shared/hooks/useAuth';

const JoinEvent = () => {
    const {id} = useParams();
    const [event,setEvent] = useState({});
    const {user } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    useEffect(()=>{
        fetch(`http://localhost:5000/event/${id}`)
        .then(res => res.json())
        .then(data => setEvent(data))
    },[])
    return (
        <div>

            <h2 className="font-semibold text-blue-600 text-5xl py-8">Booking Tour for {event.tour_location}</h2>


            <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit(onSubmit)}>
            
            <input className="my-2 appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Name" defaultValue={user.displayName} {...register("Name", { required: true })}  />
            {errors.Name && <span className="text-red-600">Name field is required</span>}
            
            <input className="my-2 appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="E-mail" defaultValue={user.email} {...register("email", { required: true })}  />
            {errors.email && <span className="text-red-600">E-mail field is required</span>}
            
            <input className="my-2 appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Phone" {...register("phone", { required: true })}  />
            {errors.phone && <span className="text-red-600">Phone field is required</span>}
            
            <input className="my-2 appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Address" {...register("address", { required: true })}  />
            {errors.address && <span className="text-red-600">Address field is required</span>}
            
            
            
            <br/>
            <input className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold mt-4 py-2 px-6 rounded" type="submit" />
            </form>

        </div>
    );
};

export default JoinEvent;
