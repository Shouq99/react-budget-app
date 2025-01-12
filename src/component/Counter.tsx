import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
   const handleIncrement =()=> {
    setCount(count +1);
   };
   const handleDecremented =()=> {
    setCount(count -1);
   };
   const handleReset =()=> {
    setCount(0);
   };
   
  return(
  <div>
    <h2>Count : {count}</h2>

    <button className='cont' onClick={handleIncrement}disabled={count === 5 ? true : false}>
        +</button>
    <button  className='cont' onClick={handleReset}>0</button>
    <button  className='cont'onClick={handleDecremented} disabled={count === -5 ? true : false}>
        
        -</button>
  </div>

  );

};
export default Counter;