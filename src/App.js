import './App.css';
import logo from './paulaaidoo.PNG'
//import logo from './logo.svg';


import { useState } from 'react';

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>   My name is Paula Aidoo and I'm going to master React!
        <a
          className="App-link"
          href="https://github.com/OfficialPaula"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
        <p> 
          ({clickCount}) 
       </p>
          Check Me Out!  
        </a>
      </header>
    </div>
  );
}

export default App;
