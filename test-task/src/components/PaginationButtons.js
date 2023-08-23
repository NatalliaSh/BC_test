import './PaginationButtons.scss';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { charactersFetchURL } from '../CONST';
import { PaginateButton } from './PaginateButton';

export const PaginationButtons = ({ cbPaginationButtonHandler }) => {
  const characters = useSelector((state) => state.characters);

  const active = Number(characters.page);
  const pagesAmount = Number(characters.pagesAmount);
  const numberButtPerPage = 7;

  const vissionButtons =
    pagesAmount <= numberButtPerPage
      ? [...Array(pagesAmount)].map((el, index) => {
          return { value: index + 1, key: index + 1 };
        })
      : active <= 4
      ? [...Array(numberButtPerPage)].map((el, index) => {
          if (index === numberButtPerPage - 2)
            return { value: '...', key: 'blind' + index };
          if (index === numberButtPerPage - 1)
            return { value: pagesAmount, key: pagesAmount };
          return { value: index + 1, key: index + 1 };
        })
      : active > pagesAmount - 4
      ? [...Array(numberButtPerPage)].map((el, index) => {
          if (index === 0) return { value: 1, key: 1 };
          if (index === 1) return { value: '...', key: 'blind' + index };
          return {
            value: pagesAmount - 6 + index,
            key: pagesAmount - 6 + index,
          };
        })
      : [...Array(numberButtPerPage)].map((el, index) => {
          if (index === 1 || index === numberButtPerPage - 2)
            return { value: '...', key: 'blind' + index };
          if (index === 0) return { value: 1, key: 1 };
          if (index === numberButtPerPage - 1)
            return { value: pagesAmount, key: pagesAmount };
          return { value: active - 3 + index, key: active - 3 + index };
        });

  return (
    <div className='PaginationButtons'>
      <PaginateButton
        key='prev'
        contex='< Prev'
        url={characters.prevPageURL}
        isPrev={true}
        isDisabled={active === 1}
        cbClickButtonHandler={cbPaginationButtonHandler}
      />
      {vissionButtons.map((el) => {
        if (el.value === '...') {
          return (
            <button
              key={el.key}
              type='button'
              className='PaginationButtons__blind text text_semiBold'
              disabled={true}
            >
              {el.value}
            </button>
          );
        }
        return (
          <PaginateButton
            key={el.key}
            contex={el.value}
            url={`${charactersFetchURL.characters}/?page=${el.value}`}
            isActive={characters.page === el.value}
            cbClickButtonHandler={cbPaginationButtonHandler}
          />
        );
      })}
      <PaginateButton
        key='next'
        contex='Next >'
        url={characters.nextPageURL}
        isNext={true}
        cbClickButtonHandler={cbPaginationButtonHandler}
        isDisabled={active === pagesAmount}
      />
    </div>
  );
};
