import React from 'react';
import Portfolio from './Portfolio';
import Services from './Services';


const Home = () => {
    return (
        <div className='homepage'>
            <Services></Services>
            <Portfolio></Portfolio>
        </div>
    );
};

export default Home;