import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { charactersDataLoad } from '../../redux/charactersDataLoad';
import { Loader } from '../Loader';
import { CardsList } from '../CardsList';

import './MainPage.scss';

export const MainPage = () => {
  const dispatch = useDispatch();

  const characters = useSelector((state) => state.characters);

  const settings = useSelector((state) => state.settings);

  function load() {
    dispatch((dispatch) =>
      charactersDataLoad(dispatch, {
        resource: 'character',
        page: settings.page + 1,
        characterID: null,
      }),
    );
  }

  useEffect(load, []);

  return (
    <div className='MainPage'>
      {characters.dataLoadState === 0 && 'no data'}
      {characters.dataLoadState === 1 && <Loader />}
      {characters.dataLoadState === 2 && (
        <CardsList arrOfCharacters={characters.data} />
      )}
      {characters.dataLoadState === 3 && 'error: ' + characters.dataLoadError}
    </div>
  );
};
