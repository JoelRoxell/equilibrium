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

import reducers from 'flow/reducers';

import App from 'components/app';

import font from 'styles/global/fonts'; // eslint-disable-line

/* Currently routes can't be imported correctly,
 * e.g. about-route type becomes undefined on import and prevents rendering in router tree.
 * TODO: Evaluate a solution and/or find the issue created with es6 import.
 */
import Account, { SignIn, Register, SignOut } from 'components/account';
import About from 'components/about';

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
          <Route path='signout' component={ SignOut } />
        </Route>
        <Route path='signin' component={ SignIn } />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
