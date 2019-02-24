import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers/index';
import MainContainerConnect from './components/MainContainer';
import fetchMiddleware from './redux/middlewares/fetchMiddleware';

export default function App() {
  const store = createStore(
    reducers,
    applyMiddleware(
      fetchMiddleware,
    ),
  );
  return (
    <Provider store={store}>
      <MainContainerConnect />
    </Provider>
  );
}
