import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { App } from 'App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/eliftech-test">
    <App />
    <Toaster />
  </BrowserRouter>
);
