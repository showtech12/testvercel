import React from 'react';
import Menu from './Menu';

export default function Header({
   children
}) {
  return (
    <>
      
       <div className='bg-blue-500 p-5'>

       <h5 className="text-3xl text-white font-bold underline fill-white drop-shadow-xl/50">
         Header.jsx
        </h5> 
       
             {children}
       

        </div>
     
    </>
  );
}
