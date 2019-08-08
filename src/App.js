import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(19);

  const handleOne = () => {
    setCounter(counter + 1);
  };

  const handleTwo = () => {
    setCounter(counter + 2);
  };

  const handleThree = () => {
    setCounter(counter + 3);
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleOne}>1 point</button>
      <button onClick={handleTwo}>2 points</button>
      <button onClick={handleThree}>3 points</button>
    </div>
  );
};

export default App;
