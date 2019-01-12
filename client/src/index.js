import "@babel/polyfill"
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import Footer from './FooterComponent/Footer'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BreadcrumbsProvider } from './Navbar/NavbarInit';

const app = (

  <BrowserRouter>
    <BreadcrumbsProvider>
    <div>
      <App />
      <Footer />
    </div>
    </BreadcrumbsProvider>
  </BrowserRouter>

)

ReactDOM.render(app, document.getElementById('root'));
