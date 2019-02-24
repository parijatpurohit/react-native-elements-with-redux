import React from 'react';
import axiosMiddleware from 'redux-axios-middleware';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import reducers from './redux/reducers/index';
import Config from './config';
import MainContainerConnect from './components/MainContainer';

export default function App() {
  const client = axios.create({
    baseURL: Config.serverBaseURL,
    responseType: 'json',
  });
  const store = createStore(
    reducers,
    applyMiddleware(
      axiosMiddleware(client),
    ),
  );
  return (
    <Provider store={store}>
      <MainContainerConnect />
    </Provider>
  );
}
