import React from 'react'
import ReactDOM from 'react-dom'
import Title from 'components/title'
import style from 'styles/main' // eslint-disable-line

ReactDOM.render(<Title title='Thank God it is friday!' />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
