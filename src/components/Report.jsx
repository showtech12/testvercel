import React, { useState } from 'react';

function ItemReport({
    members,
    setMembers
}){
    return(
        <>
            <div className='grid gap-4 bg-teal-500 p-4' >

                {members.map((member)=>
                <div className='flex gap-2'>
                    <p>{member}</p>
                    {/* <button className='bg-red-500 rounded' onClick={()=>setMembers(prev =>[...prev, 'Testing'])}> X </button> */}

                    <button className='bg-red-500 rounded' onClick={()=>setMembers(()=>members.filter((x) => x !== member ))}> X </button>
                </div>
                )}
              
            </div>
        </>
    )
}

export default function Report() {

    const [members, setMembers]=useState(['Ademola','Funmi','Tunji','Ranti'])
  return (
    <>
    <ItemReport {...{members,setMembers}} />
    </>
  );
}
