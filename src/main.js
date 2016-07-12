import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  hashHistory
} from 'react-router';

import thunk from 'redux-thunk';

import style from 'styles/main' // eslint-disable-line

import reducers from 'flow/reducers';

import App from 'components/app';
import { About } from 'components/about';
import Account, { SignIn, Register } from 'components/account';

import firebaseService from 'services/firebase';
window.firebase = firebaseService;

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

render((
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={ App }>
        <Route path='about' component={ About } />
        <Route path='account' component={ Account }>
          <Route path='register' component={ Register } />
          <Route path='signin' component={ SignIn } />
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
