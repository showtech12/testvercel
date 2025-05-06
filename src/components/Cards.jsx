import React from 'react';

const Messages =({msg})=>{
    return   <div className='rounded shadow p-3' key={msg}>{msg}</div>
}

export default function Cards() {
    // const isLogin = false
    // let msg ="";
    let role = 'ADMIN'
    const Msgs =["hello", "am okay", "good", "Kudos"]

    // return <h1>{isLogin?'You are logged in':'You are Out'}</h1>

    // msg = isLogin?<h1>You are in</h1>:<h1>You are out</h1>
    // return <div>{msg}</div>
    function getRole (){
        switch (role) {
            case 'ADMIN':
                return <hi>Welcome Admin</hi>
              
            case 'CASHIER':
                return <hi>Welcome Cahier</hi>
               // break;
        
            default:
                return <h1>Welcome User </h1> 
              //  break;
        }
    }





  return (
    <>
        <div className='grid'>
            {getRole()}
            {Msgs.length > 0 && <div className='grid grid-cols-2 gap-2'>
                {Msgs.map((msg)=>
                  <Messages {...{msg}}/>
                )}
            </div>
            
            }
           
        </div>
    </>
  );


}
