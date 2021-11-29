import React from 'react';
import Banner from '../Banner/Banner';
import Events from '../Events/Events';
import GetInTouch from '../getinTouch/GetInTouch';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Events></Events>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;