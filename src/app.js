import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  hashHistory
} from 'react-router';
import store from 'flux/store';

import style from 'styles/main' // eslint-disable-line

import App from 'components/app';
import { About } from 'components/about';

render((
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={ App }>
        <Route path='/about' component={ About } />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
