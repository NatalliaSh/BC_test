import './WorkModeButtons.scss';
import React from 'react';

export const WorkModeButtons = ({
  cbchangeWorkModeHandler,
  isPagingButtonActive,
}) => {
  const chageWorkModeHandler = ({ target }) => {
    cbchangeWorkModeHandler(target);
  };

  return (
    <div className='WorkModeButtons'>
      <button
        type='button'
        className='WorkModeButtons__infiniteLoadingButton'
        disabled={!isPagingButtonActive}
        onClick={chageWorkModeHandler}
      >
        Смотреть весь список
      </button>
      <button
        type='button'
        className='WorkModeButtons__pagingButton'
        disabled={isPagingButtonActive}
        onClick={chageWorkModeHandler}
      >
        Постраничный просмотр
      </button>
    </div>
  );
};
