import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
    return (

        <div className='counter container'>
            <div className="row">
                <div className="col-6 col-md-3">
                    <div className="counter-box">
                        <span className='counter-text'><CountUp end={21} duration={3} />k</span>
                        <span className='icon'>
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.2" cx="27" cy="27" r="27" fill="#CF1F25"/>
                            </svg>

                        </span>

                        
                        <span className="text">Project Completed</span>
                    </div>
                </div>
                <div className="col-6 col-md-3">
                <div className="counter-box">
                        <span className='counter-text'><CountUp end={100} duration={3} />k</span>
                        <span className='icon'>
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.2" cx="27" cy="27" r="27" fill="#CF1F25"/>
                            </svg>

                        </span>

                        
                        <span className="text"> Happy customers</span>
                    </div>
                </div>
                <div className="col-6 col-md-3">
                <div className="counter-box">
                        <span className='counter-text'><CountUp end={21} duration={3} /></span>
                        <span className='icon'>
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.2" cx="27" cy="27" r="27" fill="#CF1F25"/>
                            </svg>

                        </span>

                       
                        <span className="text"> Years Experiences</span>
                    </div>
                </div>
                <div className="col-6 col-md-3">
                <div className="counter-box">
                        <span className='counter-text'><CountUp end={42} duration={3} /></span>
                        <span className='icon'>
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.2" cx="27" cy="27" r="27" fill="#CF1F25"/>
                            </svg>

                        </span>

                        <span className="text">Awards Achievement</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Counter;