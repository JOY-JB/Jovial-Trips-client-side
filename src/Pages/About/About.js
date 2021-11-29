import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto">
            <h2 className= "font-semibold text-xl text-purple-700 tracking-tight">About Us</h2>
            <h2 className= "font-semibold text-blue-600 text-5xl font-mono py-2 italic">Get ready for real time adventure</h2>
            <div className="flex justify-center mt-12">
            <img  src="https://i.ibb.co/Mcd6NyJ/xabout-png-pagespeed-ic-Zsrvw-BYE3-S.webp"/>
            <div className="w-6/12">
                <p className= "text-xl px-8 my-10 text-justify flex items-center">Jovial Trips is the Adventure Booking Platform, where you can effortlessly book private, group and tailor-made multi-day organised tours in around over the Bangladesh.
                Traditionally, booking an organised tour was a tedious and time-consuming process. Where will I stay? What activities will I do? What meals am I going to have? What operator can I trust? Jovial Trips makes booking multi-day adventures seamless and timely, partnering with 2,500+ operators to offer more than 50,000+ adventures in Bangladesh. Founded in 2015, Jovial Trips was the first to transition multi-day tours to an online marketplace, making them the leader in the industry. In 2021, Jovial Trips further revolutionised the industry by introducing the Adventure Booking Platform, connecting travellers, operators, and travel agents to organised tours through one platform.</p>
            </div>
            </div>
        </div>
    );
};

export default About;