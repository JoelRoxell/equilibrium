import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, hashHistory} from 'react-router'

import style from 'styles/main' // eslint-disable-line

import reducers from 'flow/reducers'

import App from 'components/app'
import { About } from 'components/about'

let store = createStore(reducers)

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App} />
      <Route path='/about' component={About} />
    </Router>
  </Provider>
), document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
