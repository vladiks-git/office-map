import React from 'react';
import { ReactSVG } from 'react-svg';

const Main = () => {

  const handleClick = (e: any) => {
    console.log(e.target.closest('.hov'));
  };

  return (
    <div>
      <div onClick={handleClick}>
        <ReactSVG src='full.svg' />
      </div>
    </div>
  );
};

export default Main;