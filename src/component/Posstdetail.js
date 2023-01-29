import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Posstdetail = () => {
    const post = useLoaderData()
    console.log(post);
    return (
        <div>
            <h3>{post.title} </h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Posstdetail;