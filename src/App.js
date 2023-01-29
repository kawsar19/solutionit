import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Frienddetail from './component/Frienddetail';
import Friends from './component/Friends';
import Notfound from './component/Notfound';
import Posstdetail from './component/Posstdetail';
import Posts from './component/Posts';
import Product from './component/Product';
import Main from './layout/Main';
import Home from './pages/home/Home'


const App = () => {
  const router=createBrowserRouter([
    {
      path:'/', 
      element:<Main/> ,
      children:[
        {path:'/', element:<Home/> },

        {path:'/friends',
         loader:async ()=>{
          return fetch('https://jsonplaceholder.typicode.com/users')
         },

        element:<Friends/> },
        {
          path:'/friend/:friendId',
          loader:async ({params})=> {
           return  fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element:<Frienddetail/>
        },
       {path:'/posts',
         loader:async ()=>{
          return fetch('https://jsonplaceholder.typicode.com/posts')
         },
         
        element:<Posts/> },

        {
          path:'/post/:postid',
          loader: async(params)=>{
            return  fetch(`https://jsonplaceholder.typicode.com/posts/${params.params.postid}`)
          },
          element:<Posstdetail></Posstdetail>
        },

        {path:'/product', element:<Product/>},
        {path:'/contact', element:<Contact/>},
      ]
    },
    
    {path:'/about', element:<About/> },
    {path:'*',element:<Notfound/>}
    
    
 
    
])
  return (
    <div>
    
      <RouterProvider router={router}>
      
      </RouterProvider>
    </div>
  );
};

export default App;