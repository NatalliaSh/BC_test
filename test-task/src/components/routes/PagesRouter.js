import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageFilmSearch } from '../pages/MainPage';
import { PageFilmDetails } from '../pages/PageFilmDetails';

export const PagesRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/details/:filmname' element={<PageFilmDetails />} />
    </Routes>
  );
};
