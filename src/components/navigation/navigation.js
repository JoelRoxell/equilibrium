import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './style/navigation.styl';

class Navigation extends Component {
  render() {
    return (
      <nav className={ style.navigation }>
        <ul className={ style.list }>
          <li className={ style.listItem }>
            <Link to='/'>Home</Link>
          </li>
          <li className={ style.listItem }>
            <Link to='/account/signin'>Sign in</Link>
          </li>
          <li className={ style.listItem }>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
