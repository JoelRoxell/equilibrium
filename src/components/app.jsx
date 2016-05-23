import React, {Component, PropTypes} from 'react'
import Title from 'components/title'

class App extends Component {
  render() {
    return (
      <div>
        <Title title={`Thank god it's friday`} />
        <div>
          React-router
        </div>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default App
