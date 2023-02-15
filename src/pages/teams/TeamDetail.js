import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TeamDetail = () => {
    const detail=useLoaderData();
    console.log(detail);
    return (
        <div>
            <h3>name {detail.name} </h3>
            <h3>email {detail.email}</h3>
        </div>
    );
};

export default TeamDetail;