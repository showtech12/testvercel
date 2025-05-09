import React from 'react';
import { Outlet } from 'react-router-dom';
// import '../index.css'
import '../show.css'
import Hero from '../components/Hero';
//import Form from '../components/Form';
export default function Showlayout() {
  return (
    <>
        <div className='w-full grid gap-4 px-4 max-w-[1000px] mx-auto'>
            <Hero/> 
            <Outlet/>
           
            <footer>footer from show layout</footer>
        </div>
    </>
  );
}