import React from 'react';
import { ReactSVG } from 'react-svg';

const Front = () => {
  return (
    <div>
      front
      <div onClick={e => console.log(e.target)}>
        <ReactSVG src='section.svg' />
      </div>
    </div>
  );
};

export default Front;