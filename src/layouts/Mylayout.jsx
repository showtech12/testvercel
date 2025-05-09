import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../index.css'

import Hero from '../components/Hero';

export default function MyLayout() {
  return (
    <>
        <div className='w-full grid gap-4 p-4 max-w-[1000px] mx-auto bg-red-500'>
        <Hero/>
            <Outlet/>
            <footer>this is my layout</footer>
        </div>
    </>
  );
}
