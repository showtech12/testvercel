//import React, { useState } from 'react';

const MenuItem=({item,eventData})=>{
    // return <li className='bg-red-400'>{item}</li>
     return <li className='bg-red-400'>
        <button onClick={()=>
            eventData(item)
        }>{item}</button>
     </li>
    

}


export default function Menu({num,items,eventData}) {
    
  return (
    <>
        <div className={`bg-blue-600 text-white p-4` }>
        <p>List of Nav bar from Menu.jsx {num}</p>
        <ul className='bg-red-400'>
            {/* {items.map((item)=>
                <li>{item}</li>
            )} */}

            {items.map((item)=>
                <MenuItem key={item} {...{item,eventData}} />
            )}
        </ul>
        </div>
    </>
  );
}
