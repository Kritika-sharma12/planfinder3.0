import { registerApplication, start } from 'single-spa';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <React.Fragment>
      <App />
    </React.Fragment>,
    document.getElementById('root')
);

registerApplication(
  'filters',
  () => import('filters/filters'),
  location => location.pathname.startsWith('/')
);


registerApplication(
  'maincontent',
  () => import('maincontent/maincontent'),
  location => location.pathname.startsWith('/')
);


start();
