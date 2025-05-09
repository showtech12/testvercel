import { useState } from 'react';

const useHooks = () => {
  const [name1, setName1] = useState('dd');
  const AddTwo = (a:number,b:number)=>{
        return a*b;
  }
  return { name1, setName1, AddTwo };
};

export default useHooks;