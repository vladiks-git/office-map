import React from 'react';
import { ReactSVG } from 'react-svg';
import './App.css';

function App() {

  const handleClick = (e: any) => {
    console.log(e.target.closest('.hov'));
  };

  return (
    <div className='App'>
      <div onClick={handleClick}>
        <ReactSVG src='full.svg' />
      </div>
    </div>
  );
}

export default App;
