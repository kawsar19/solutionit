import React from 'react';

const Portfolio = () => {
    return (
      <section className="portfolio py-5">
        <div className="container">
          <div className="row text-center">
            <div class="section-title ">
              <span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="7" cy="7" r="7" fill="#CF1F25"></circle>
                </svg>
              </span>
              <span>Portfolio</span>
            </div>

            <h1 className="section-title-big">
              Some Recent Project We Successfully Done
            </h1>
          </div>

          <div className="row g-4">
            <div className="col-12 col-sm-6 col-lg-3">
              <a href="#" className="cardPortfolio">
                <img src="assets/images/portfolio/1.png" />
                <div class="focus-content">
                    <p>Project Task Management</p>
                    <p>Digital Services / App Design</p>
                  
                </div>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
            <a href="#" className="cardPortfolio">
                <img src="assets/images/portfolio/2.png" />
                <div class="focus-content">
                    <p>Project Task Management</p>
                    <p>Digital Services / App Design</p>
                  
                </div>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
            <a href="#" className="cardPortfolio">
                <img src="assets/images/portfolio/3.png" />
                <div class="focus-content">
                    <p>Project Task Management</p>
                    <p>Digital Services / App Design</p>
                  
                </div>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
            <a href="#" className="cardPortfolio">
                <img src="assets/images/portfolio/4.png" />
                <div class="focus-content">
                    <p>Project Task Management</p>
                    <p>Digital Services / App Design</p>
                  
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Portfolio;