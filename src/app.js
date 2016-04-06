import React from 'react'
import ReactDOM from 'react-dom'
import Title from 'components/title'
import css from './styles/main.css' // eslint-disable-line

ReactDOM.render(<Title title='test' />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
