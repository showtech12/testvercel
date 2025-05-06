import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


 import './index.css'
import Home from './pages/Home';
import Products from './pages/Products';
import Notfound from './pages/Notfound';
// import App from './App.jsx'

const router = createBrowserRouter([
  {
    path:'*',
    element:<Notfound/>
  },
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/user/:id',
    element:<Products>
      <span className='text-white'> my product children </span>
    </Products>
  },

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
