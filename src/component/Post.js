import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    console.log(post);
    return (
        <div className='post'>
            <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;