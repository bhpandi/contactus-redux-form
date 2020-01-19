import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

import './index.css';
import App from './modules/UserManagement/containers/SignInForm';
import registerServiceWorker from './registerServiceWorker';
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
   <Router>
    <App />
  </Router> 
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
