import React from 'react';
import './Modal.scss';

export const Modal = ({ children, cbModalCloser }) => {
  return (
    <div className='Modal'>
      <button
        className='Modal__closer text text--bold text--white'
        onClick={cbModalCloser}
      >
        X
      </button>
      {children}
    </div>
  );
};
