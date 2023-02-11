import React from 'react';


const Video = () => {
    return (
        <div className="container">
            <div className='row align-items-center g-4 py-5'>
            <div className="col-md-6">
                <h3 className='heading-text'>How Our Agency is Transforming Businesses <br /> and Brands through Online Solutions</h3>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
                <figure>
                    <img src="assets/images/logorounded.png" alt="" />
                </figure>
            </div>

            <div className="col-12">
                <div>
                <div class="plyr__video-embed py-4" id="player">
                <iframe  className='w-100' height="400"
                    src="https://www.youtube.com/embed/zYzIWbDafks">
                    </iframe>
                                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Video;