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
import SignIn from 'components/sign-in';

import firebaseService from 'services/firebase';
window.firebase = firebaseService;

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

console.log(SignIn);
render((
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={ App }>
        <Route path='/about' component={ About } />
        <Route path='/signin' component={ SignIn } />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
