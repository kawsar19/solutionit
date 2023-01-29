import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css'

const Firend = ({friend}) => {
    const {name,email,phone,website,username,id} =friend
    return (
        <div className='friend__card'>
          <p> Name : {name}</p> 
          <p> email : {email}</p> 
          <p> Phone : {phone}</p> 
          <p> email : {website}</p> 
          <p> username : <Link to={`/friend/${id}`}>{username}</Link></p> 
        </div>
    );
};

export default Firend;