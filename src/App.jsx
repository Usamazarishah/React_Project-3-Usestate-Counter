import { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);

  return (
    <div className="counter-container">
      <button 
        className="counter-button" 
        onClick={() => {
          console.log("add");
          setNum(num + 1);
        }}
      >
        Add
      </button>

      <p className="counter-display">{num}</p>

      <button 
        className="counter-button" 
        onClick={() => {
          console.log("minus");
          setNum(num - 1);
        }}
      >
        Minus
      </button>
    </div>
  );
}


export default App
