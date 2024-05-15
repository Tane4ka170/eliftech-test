import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';
import { App } from 'App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/eliftech-test">
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      <Toaster />
      {/* </PersistGate> */}
    </Provider>
  </BrowserRouter>
);
