import React, { useState } from 'react';
import './App.css';

function App() {
  // Create a state variable called "count" with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
      <h1   >Counter</h1>
      <h1>You've Count for {count} times</h1>
      
      <div className="bg-red-400 rounded-lg ">
      <button onClick={() =>setCount(count + 1)}>Increase</button>
      <button onClick={() =>setCount(0)}>Reset</button>
      <button onClick={() =>setCount(count - 1)}>Decrease</button>
      </div>
      
      </header>
    </div>
  );
}

export default App;
