import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-6">

                        <div className="left-content">
                        <p>Contact Us</p>
                        <h1>Get in Touch</h1>
                        <div className="row">
                            <div className="col-6">
                                <input type="text" placeholder='name' />
                            </div>
                            <div className="col-6">
                                <input type="text" placeholder='email' />
                            </div>
                            <div className="col-6">
                                <input type="text" placeholder='phone' />
                            </div>
                            <div className="col-6">
                                <input type="text" placeholder='subject' />
                            </div>
                            <div className="col-12">
                                <input type="text" name="" id="" placeholder='message' />
                            </div>
                        
                        </div>
                        </div>

                    </div>
                    <div className="col-md-6">
                       <div className="right-content">
                       <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116793.79042036732!2d90.32126947926662!3d23.825498430550926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9633e8ab4cf%3A0xca78f15709c2db1!2sSolution%20IT%20Care!5e0!3m2!1sen!2sbd!4v1676141174709!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;