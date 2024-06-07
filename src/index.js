import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';

import './index.css';
import App from './App';
import pokemonsSlice from './slices/pokemonsSlice';

// import { logger } from './middlewares';
// const composeEnhanced=compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(logger))
// const store = createStore(pokemonsSlice,composeEnhanced);
const store = createStore(pokemonsSlice);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>  
      <App />
    </Provider>
  </React.StrictMode>
);

