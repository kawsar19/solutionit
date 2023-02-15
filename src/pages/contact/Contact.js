import React from 'react';

const Contact = () => {
    return (
      <div className='contact'>
        <div className="container">
          <div className="row g-4 ">
            <div className="col-md-6">
              <div className="left-content">
                <p className='contact-us'>Contact Us</p>
                <h1 className='getin py-4'>Get in Touch</h1>
                <div className="row py-4">
                  <div className="col-6">
                    <input
                      type="text"
                      placeholder="name"
                      className="border-input"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      placeholder="email"
                      className="border-input"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      placeholder="phone"
                      className="border-input"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      placeholder="subject"
                      className="border-input"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="message"
                      className="border-input message"
                    />
                  </div>
                  <div className="col-12 py-3">
                    <div class="round-link">
                      <span class="round-icon">
                        <svg
                          width="65"
                          height="65"
                          viewBox="0 0 65 65"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="65"
                            height="65"
                            rx="32.5"
                            fill="#FF6B00"
                          />
                        </svg>
                      </span>
                      <a href="">
                        <span className="text-dark">Send Now</span>
                        <span class="icon ps-2">
                          <svg
                            width="19"
                            height="12"
                            viewBox="0 0 19 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696699C13.4645 0.403806 12.9896 0.403806 12.6967 0.696699C12.4038 0.989593 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM0 6.75H18V5.25H0V6.75Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-content">
                <div className="map">
                  <iframe
                  className='w-100'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116793.79042036732!2d90.32126947926662!3d23.825498430550926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9633e8ab4cf%3A0xca78f15709c2db1!2sSolution%20IT%20Care!5e0!3m2!1sen!2sbd!4v1676141174709!5m2!1sen!2sbd"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="row py-5">

                  <div className="col-4">

                    <div className="contact-box">
                      <span className="icon">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#101010"/>
                    <path d="M20 11C16.1403 11 13 13.9907 13 17.6667C13 18.7702 13.2897 19.8643 13.8404 20.8348L19.6172 28.7852C19.6941 28.9178 19.8407 29 20 29C20.1593 29 20.3059 28.9178 20.3828 28.7852L26.1617 20.8315C26.7103 19.8643 27 18.7702 27 17.6666C27 13.9907 23.8597 11 20 11ZM20 21C18.0701 21 16.5 19.5046 16.5 17.6667C16.5 15.8287 18.0701 14.3334 20 14.3334C21.9299 14.3334 23.5 15.8287 23.5 17.6667C23.5 19.5046 21.9299 21 20 21Z" fill="white"/>
                    </svg>

                

                      </span>

                      <h3 className="title">Address</h3>
                      <p className="info">El-Mahalla El-Kubra 37</p>
                    </div>

                  </div>
                  <div className="col-4">

                    <div className="contact-box">
                      <span className="icon">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#101010"/>
                        <path d="M24.6837 22.9071C24.0957 22.3265 23.3616 22.3265 22.7773 22.9071C22.3316 23.349 21.8859 23.791 21.4477 24.2404C21.3278 24.364 21.2267 24.3903 21.0806 24.3079C20.7923 24.1505 20.4851 24.0232 20.208 23.8509C18.9158 23.0382 17.8334 21.9932 16.8746 20.8172C16.3989 20.2329 15.9757 19.6074 15.6798 18.9033C15.6199 18.7609 15.6311 18.6673 15.7472 18.5512C16.1929 18.1205 16.6274 17.6785 17.0656 17.2366C17.6761 16.6223 17.6761 15.9032 17.0618 15.2852C16.7135 14.9331 16.3652 14.5886 16.0169 14.2365C15.6573 13.8769 15.3015 13.5136 14.9382 13.1578C14.3502 12.5848 13.6161 12.5848 13.0318 13.1616C12.5824 13.6035 12.1516 14.0567 11.6947 14.4912C11.2715 14.8919 11.058 15.3826 11.013 15.9556C10.9419 16.8882 11.1704 17.7684 11.4925 18.6261C12.1516 20.4014 13.1554 21.9782 14.3727 23.4239C16.0169 25.379 17.9795 26.9259 20.2754 28.042C21.3091 28.5439 22.3803 28.9297 23.5451 28.9933C24.3466 29.0383 25.0433 28.836 25.6013 28.2105C25.9834 27.7836 26.4141 27.3941 26.8186 26.9858C27.4178 26.3791 27.4216 25.645 26.8261 25.0457C26.1145 24.3303 25.3991 23.6187 24.6837 22.9071Z" fill="white"/>
                        <path d="M23.9663 19.9187L25.3483 19.6828C25.1311 18.4131 24.5318 17.2632 23.6217 16.3494C22.6591 15.3868 21.4419 14.78 20.101 14.5928L19.9062 15.9823C20.9437 16.1284 21.8876 16.5966 22.6329 17.3419C23.337 18.046 23.7977 18.9374 23.9663 19.9187Z" fill="white"/>
                        <path d="M26.1294 13.9139C24.5338 12.3184 22.5151 11.3109 20.2866 11L20.0918 12.3895C22.0169 12.6592 23.7623 13.5319 25.1406 14.9064C26.4477 16.2136 27.3054 17.8653 27.6163 19.6818L28.9983 19.4459C28.635 17.3409 27.6425 15.4308 26.1294 13.9139Z" fill="white"/>
                        </svg>


                

                      </span>

                      <h3 className="title">Phone</h3>
                      <p className="info">(406) 555-0120</p>
                    </div>

                  </div>
                  <div className="col-4">

                    <div className="contact-box">
                      <span className="icon">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#101010"/>
                        <path d="M21.5043 21.768C21.0565 22.0666 20.5363 22.2244 20 22.2244C19.4637 22.2244 18.9436 22.0666 18.4957 21.768L11.1198 16.8506C11.0789 16.8234 11.0391 16.7949 11 16.7657V24.8234C11 25.7472 11.7497 26.4804 12.657 26.4804H27.3429C28.2668 26.4804 29 25.7307 29 24.8234V16.7656C28.9608 16.7949 28.9209 16.8235 28.8799 16.8508L21.5043 21.768Z" fill="white"/>
                        <path d="M11.7049 15.9739L19.0808 20.8914C19.36 21.0775 19.68 21.1706 20 21.1706C20.32 21.1706 20.64 21.0775 20.9192 20.8914L28.2951 15.9739C28.7365 15.6799 29 15.1877 29 14.6565C29 13.7431 28.2569 13 27.3435 13H12.6565C11.7431 13 11 13.7431 11 14.6573C11 15.1877 11.2635 15.6799 11.7049 15.9739Z" fill="white"/>
                        </svg>


                

                      </span>

                      <h3 className="title">Email</h3>
                      <p className="info">vixan@email.com</p>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;