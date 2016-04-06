/* @flow */
import React, {Component, PropTypes} from 'react'

class Title extends Component {

  static propTypes = {
    title: PropTypes.string
  };

  constructor (props) {
    super(props)
    this.state = {
      movies: ['Batman', 'SuperMan', 'SpiderMan', 'Deadpool', 'Bane']
    }
  }

  sum (n1:number, n2:number):number {
    return n1 + n2
  }

  renderMovieTitles () {
    if (this.state.movies) {
      return this.state.movies.map((title, i) => {
        return (
          <div>
          {`${title} : ${i * 1}`}
          </div>
        )
      })
    } else {
      return (
        <span>{'No movies...'}</span>
      )
    }
  }

  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.renderMovieTitles()}
        <p>
          This is still working, time to refactor...
          test method: {this.sum(10, 24)}
        </p>
      </div>
    )
  }
}

export default Title
