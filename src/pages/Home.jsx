import React from 'react';
import Navs from './Navs';
import { Outlet, Link } from 'react-router-dom';
import Form from '../components/Form';

export default function Home() {
  return (
    <>
    <div className='p-4 bg-teal-500'>
    <Link to="login">Login</Link>
    <Navs/>
    <h1> from home</h1>
    <Form/>
    </div>
        
    </>
  );
}
