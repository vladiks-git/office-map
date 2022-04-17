import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

const Main = () => {

  const navigate = useNavigate()

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const target: HTMLElement = e.target as HTMLElement;
    if (target) {
      const route = target.closest('.hov')!.id;
      navigate(route);
    }
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