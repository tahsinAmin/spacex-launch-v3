import React, { useState } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      
        <h1 className='text-xl font-semibold'>the count is: {count}</h1>

        <button className='border text-sm p-2' onClick={() => setCount(count+1)}>Increment</button>
        <button className='border text-sm p-2' onClick={() => setCount(count-1)}>Decrement</button>
      
    </div>
  );
}

export default App;
