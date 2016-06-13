import React, {Component} from 'react'
import {Link} from 'react-router'

class Navigation extends Component {
  authButton() {
    return (
      <li className='navigation-list-item'>
        <Link to='signin'>Sign in</Link>
      </li>
    )
  }

  render() {
    return (
      <nav className='navigation'>
        <ul className='navigation-list'>
          <li className='navigation-list-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='navigation-list-item'>
            <Link to='/about'>About</Link>
          </li>
          {this.authButton()}
        </ul>
      </nav>
    )
  }
}

export default Navigation
