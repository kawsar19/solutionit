import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Frienddetail from './component/Frienddetail';
import Friends from './component/Friends';
import Posstdetail from './component/Posstdetail';
import Posts from './component/Posts';
import Product from './component/Product';
import Main from './layout/Main';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home'
import NotFound from './pages/notfound/NotFound'
import Portfolio from './pages/portfolio/Portfolio';
import Teams from './pages/teams/Teams';
import TeamDetail from './pages/teams/TeamDetail';


const App = () => {
  const router=createBrowserRouter([
    {
      path:'/', 
      element:<Main/> ,
      children:[
        {path:'/', element:<Home/> },

      
        {path:'/teams',
         loader:async ()=>{
          return fetch('https://jsonplaceholder.typicode.com/users')
         },

        element:<Teams/> },
        {
          path:'/team/:teamId',
          loader:async ({params})=> {
           return  fetch(`https://jsonplaceholder.typicode.com/users/${params.teamId}`)
          },
          element :<TeamDetail/>
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
        {path:'/portfolio', element:<Portfolio/>},
        {path:'/contact', element:<Contact/>},
        {path:'*',element:<NotFound/>},
        {path:'/about', element:<About/> },
      ]
    },
    
    // {path:'/about', element:<About/> },
    
    
    
 
    
])
  return (
    <div>
    
      <RouterProvider router={router}>
      
      </RouterProvider>
    </div>
  );
};

export default App;