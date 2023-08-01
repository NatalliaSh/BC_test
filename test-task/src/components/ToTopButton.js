import React from 'react';
import './ToTopButton.scss';

export const ToTopButton = () => {
  let timeout;

  const toTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className='ToTopButton text text--bold' onClick={toTop}>
      To top
    </button>
  );
};
