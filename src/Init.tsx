import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reducer from './slices/index';
import App from './App';

const Init: React.FC = () => {
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['note/add'],
        ignoredPaths: ['notes.note'],
      },
    }),
  });
  return (
  <Provider store={store}>
    <App />
  </Provider>
  );
};

export default Init;