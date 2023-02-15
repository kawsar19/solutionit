import React from 'react';
import { Link } from 'react-router-dom';

const Team = ({team}) => {
    console.log(team);
    const {name,email,phone,website,username,id} =team
    return (
        <div className='friend__card'>
          {/* <p> Name : {name}</p> 
          <p> email : {email}</p> 
          <p> Phone : {phone}</p> 
          <p> email : {website}</p> 
          <p> username : <Link to={`/team/${id}`}>{username}</Link></p>  */}
        </div>
    );
};

export default Team;