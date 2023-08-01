import './PaginateButton.scss';
import React from 'react';

export const PaginateButton = ({
  contex,
  isPrev,
  isNext,
  url,
  cbClickButtonHandler,
  isActive,
}) => {
  const clickButtonHandler = ({ target }) => {
    cbClickButtonHandler(target);
  };

  const button = isPrev ? (
    <button
      type='button'
      className='PaginateButton__next_prev'
      data-url={url}
      onClick={clickButtonHandler}
      disabled={!url}
    >
      {contex}
    </button>
  ) : isNext ? (
    <button
      type='button'
      className='PaginateButton__next_prev'
      data-url={url}
      onClick={clickButtonHandler}
      disabled={!url}
    >
      {contex}
    </button>
  ) : (
    <button
      type='button'
      className='PaginateButton__page_numb'
      data-url={url}
      onClick={clickButtonHandler}
      disabled={isActive}
    >
      {contex}
    </button>
  );

  return button;
};
