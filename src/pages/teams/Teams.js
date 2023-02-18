import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Team from './Team';

const Teams = () => {
    const teams= useLoaderData(); 
    console.log(teams);

    return (
        <div className='container'>
            <h3 className="section-title pt-2 pt-lg-5">Our Excellence Team That Can <br /> Digitalize Your Brand</h3>
           <div className="row g-4 py-2 py-lg-4">
           
            {
                teams.map(team=><Team
                key={team.id} 
                team={team}
                ></Team>)
            }
 
           </div>

           <div className="row px-5">
            <h2 className="section-title text-center px-3 py-5">We'd be interested in learning more about your project.</h2>
              <div className='d-flex align-item-center justify-content-center py-5'>
              <Link to={'/contact'} class="round-link"><span class="round-icon"><svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="65" height="65" rx="32.5" fill="#FF6B00"></rect></svg></span><a href=""><span class="text-dark">Contact US</span><span class="icon ps-2"><svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696699C13.4645 0.403806 12.9896 0.403806 12.6967 0.696699C12.4038 0.989593 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM0 6.75H18V5.25H0V6.75Z" fill="black"></path></svg></span></a></Link>
              </div>
           </div>
        </div>
    );
};

export default Teams;