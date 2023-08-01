import './PaginationButtons.scss';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { charactersFetchURL } from '../CONST';
import { PaginateButton } from './PaginateButton';

export const PaginationButtons = ({ cbPaginationButtonHandler }) => {
  const characters = useSelector((state) => state.characters);

  const getpaginationButtons = () => {
    const buttons = [
      <PaginateButton
        key='prev'
        contex='< Prev'
        url={characters.prevPageURL}
        isPrev={true}
        cbClickButtonHandler={cbPaginationButtonHandler}
      />,
    ];
    for (let i = 1; i <= characters.pagesAmount; i++) {
      buttons.push(
        <PaginateButton
          key={i}
          contex={i}
          url={`${charactersFetchURL.characters}/?page=${i}`}
          cbClickButtonHandler={cbPaginationButtonHandler}
          isActive={characters.page === i}
        />,
      );
    }
    buttons.push(
      <PaginateButton
        key='next'
        contex='Next >'
        url={characters.nextPageURL}
        isNext={true}
        cbClickButtonHandler={cbPaginationButtonHandler}
      />,
    );
    return buttons;
  };

  const paginationButtons = getpaginationButtons();

  return <div className='PaginationButtons'>{paginationButtons}</div>;
};
