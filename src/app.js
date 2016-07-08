import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  browserHistory
} from 'react-router';

import thunk from 'redux-thunk';

import style from 'styles/main' // eslint-disable-line

import reducers from 'flow/reducers';

import App from 'components/app';
import { About } from 'components/about';
import Signin from 'components/signin';

import firebaseService from 'services/firebase';
window.firebase = firebaseService;

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

render((
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path='/' component={ App }>
        <Route path='/about' component={ About } />
        <Route path='/signin' component={ Signin } />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
