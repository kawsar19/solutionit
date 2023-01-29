import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';

const Posts = () => {
    const posts=useLoaderData();
    console.log(posts);
    return (
        <div>
            <h3> total posts  {posts.length} </h3>
            <div className="posts">
                {
                    posts.map(post=><Post 
                    key={post.id}
                    post={post}
                    ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;