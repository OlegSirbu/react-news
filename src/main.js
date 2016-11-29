import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';

import App from './components/App.jsx';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { getNews } from './actions/newsActions';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore();
store.dispatch(getNews());

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('container')
);

