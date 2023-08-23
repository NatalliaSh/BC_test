import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { MainPage } from './components/pages/MainPage';

import './App.scss';

export const App = () => (
  <Provider store={store}>
    <MainPage />
  </Provider>
);

export default App;
