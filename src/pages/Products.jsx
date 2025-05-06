import React from 'react';
import { useParams } from 'react-router-dom';


export default function Products({
    children
}) {
    const {id}  = useParams();
  return (
    <>
    <div className='bg-teal-500 p-4 text-white-700'>
        <p className='text-bold'>Product List</p>
        {children} {id}
    </div>
    </>
  );
}
