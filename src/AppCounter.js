import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App" data-test="component-app">
      <h1 data-test="counter-display">The Counter is currently <span data-test='count'>{count}</span></h1>
      <button data-test="increment-button" onClick={() => setCount(count+1)}> Increment Counter</button>
    </div>
  );
}

export default App;
