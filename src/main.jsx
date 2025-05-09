import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import Home from './pages/Home';
import Products from './pages/Products';
import Notfound from './pages/Notfound';
import MyLayout from './layouts/Mylayout';
//import Showlayout from './layouts/Showlayout';
import Login from './pages/Login';
import Showlayout from './layouts/Showlayout';
import Form from './components/Form';
import Report from './components/Report';
import Home2 from './pages/Home2';

// import App from './App.jsx'

const router = createBrowserRouter([
  {
    path:'*',
    element:<Notfound/>
  },
  {
    path:'/',
    element:<MyLayout/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      }
     
  ]
  },
  {
    path:'/user/:id',
    element:<Products>
      <span className='text-white'> my product children </span>
    </Products>
  },
  
  {
    path:'/report',
    element:<Report/>
  },

  {
    path:'/home2',
    element:<Home2/>
  }
 

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
