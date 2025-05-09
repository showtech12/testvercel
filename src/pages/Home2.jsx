import React, { useState,useEffect } from 'react';
import useHooks from '../hooks/useHooks';


const AnotherComp = () => {
    const { name1, setName1,AddTwo } = useHooks();
    console.log(name1);
    return <div>hello from Another {name1}
        <h1>Anwser: {AddTwo(3,3)}</h1>
    </div>;
  };

export default function Home2() {

    //const [name, setName] = useState('showtech')
   // const {name1, setName1} = useHooks();
    //console.log(name1)

   // const changeName =()=>setName('John')

    

// useEffect(() => {
// //   return () => {
// //     effect
// //   };
// // if(name !=="showtech"){
// //     console.log("Name changed")
// // }
//  const timer = setInterval(() => {
//     console.log("tick")
//  }, 1000);

//  return ()=>clearInterval(timer)

// }, [])

  return (
    <>
        <div className='bg-teal-500'>
            <p>My name {name}</p>
            {/* <button onClick={changeName}> Change</button> */}

            <h2>ggfff {name}</h2>

            <AnotherComp/>
        </div>
    </>
  );
}
