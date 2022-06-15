import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import './components/StyleCss/Nav.css'
import './components/StyleCss/RegisterLogin.css'
import './components/StyleCss/ContactUs.css'
import { Provider } from 'react-redux';
import { store } from './JS/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
);

