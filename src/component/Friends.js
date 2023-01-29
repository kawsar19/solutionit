import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Firend from './Firend';


const Friends = () => {
    const friends= useLoaderData(); 
    // console.log(friends);
    return (
        <div>
            <h4>Fiend {friends.length}</h4> 
           <div className="friend__card-wrapper">
           {
                friends.map(friend=><Firend
                key={friend.id} 
                friend={friend}
                ></Firend>)
            }
           </div>
        </div>
    );
};

export default Friends;