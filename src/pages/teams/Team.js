import React from 'react';
import { Link } from 'react-router-dom';

const Team = ({team}) => {
    console.log(team);
    const {id,_id,name,profession,photo} =team
    console.log(_id);
    return (
        <>
    

        <div className="col-sm-6 col-md-4 ">
        <Link to={`/team/${_id}`} className='team-member'>
            <img src={photo} alt="Snow" ></img>
            <div className="content">
            <p> Name : {name}</p> 
            <p>{profession}</p>
            </div>        
        </Link>
        </div>

        </>
    );
};

export default Team;