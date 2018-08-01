import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import BlogApp from './BlogApp';

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <BlogApp/>
  </Provider>
  </BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
