import React, {useState} from 'react';
import Message from './component/message';

const App3 () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
    setCount((count) => count + 1);
    };
    console.log('App component is rendering');
 
    return (
        <div>
        <h2>count: {count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <Message numberOfMessage={count}/>
        </div>
    );
};

export default App3;