import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AllStateProvider } from './Context/AllStatue'
ReactDOM.render(
  <AllStateProvider>
    <App />
  </AllStateProvider>,
  document.getElementById('root')
);