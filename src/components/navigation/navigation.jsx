import React, {Component} from 'react'
import {Link} from 'react-router'

class Navigation extends Component {
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
        </ul>
      </nav>
    )
  }
}

export default Navigation
