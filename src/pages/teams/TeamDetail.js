import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Skill from './Skill';

const TeamDetail = () => {
    const detail=useLoaderData();
    console.log(detail);
    return (
        <section className='py-5'>
           <div className="container">
            <h3 className="section-title">{detail.name } {detail.profession}</h3>

            <div className="row py-5 g-4">
                <div className="col-lg-5">
                    <figure>
                        <img className='img-fluid' src={detail.photo} alt="" />
                    </figure>
                </div>

                <div className="col-lg-7">
                    <div className="right-content py-5">
                        <p className="about-text">{detail.about} </p> 

                        <div className="info">
                            <p className="address"><span>Address :   </span> {detail.address}</p>
                            <p className="email"><span>Email :   </span> {detail.email}</p>
                            <p className="phone"><span>Phone :   </span> {detail.phone}</p>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="section-title py-3 mb-3">Skill & Specialist</h3>

            <div className="row">
            {


                detail.skills.map(skill=><Skill key={skill.percent} skill={skill}></Skill>)
            }
            </div>

           </div>
        </section>
    );
};

export default TeamDetail;