import React from 'react';
import Counter from '../about/Counter';
import Video from '../about/Video';
import Portfolio from './Portfolio';
import Services from './Services';


const Home = () => {
    return (
        <div className='homepage'>
            <Services></Services>
            <Portfolio></Portfolio>
            <Counter></Counter>
            <Video></Video>
        </div>
    );
};

export default Home;