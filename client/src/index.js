import "@babel/polyfill"
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';


import { BreadcrumbsProvider } from './Navbar/NavbarInit';

console.log(process.env)

const app = (
  <BrowserRouter>
    <BreadcrumbsProvider>
    <div>
      <App />
    </div>
    </BreadcrumbsProvider>
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));
