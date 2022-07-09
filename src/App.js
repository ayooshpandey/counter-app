import { useState } from 'react';
import './App.css';



function App() {
  const[count, setCount] = useState(0)

  function Reset() {

    let isReset = window.confirm("Be careful what you wish for!");
    if (isReset) {
      setCount(0);
    }
  }


  return (
    <div className="App">
      <header className="App-header">
       <button className='button'
       onClick={() => setCount(count + 1)}>+</button>
       <h2>{count}</h2>
       <button className='button2'
       onClick={() => setCount(count - 1)}>-</button>
       <button className='button3' 
       onClick={Reset}>RESET</button>
      </header>
    </div>
  );
}

export default App;
