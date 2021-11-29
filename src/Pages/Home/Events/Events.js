import {React, useState,useEffect} from 'react';
import Event from "./Event/Event"
const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(()=>{
        fetch('https://aqueous-island-93014.herokuapp.com/events')
        .then(res=>res.json())
        .then(data => setEvents(data));
    },[])
    return (
        <div className="pt-16">
            <p className= "text-xl font-semibold text-purple-600">Check Our Best Promotional Tour</p>
            <h2 className = "font-semibold text-5xl">Our Upcomming Events</h2>
            <div className="pt-5 container mx-auto grid grid-rows-2 grid-flow-col">
                {
                    events.map(event => <Event
                        key = {event._id}
                        event = {event}
                    ></Event>)
                }
            </div>
        </div>
    );
};

export default Events;