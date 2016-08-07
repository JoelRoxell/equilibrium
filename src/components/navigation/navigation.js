import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import style from './style';

class Navigation extends Component {
  renderSignInOrOut() {
    let node = (
      <li className={ style.listItem }>
        <Link to='/account/signin'>{ 'Sign In' }</Link>
      </li>
    );

    if (this.props.authenticated) {
      node = (
        <li className={ style.listItem }>
          <Link to='/account/signout'>{ 'Sign out' }</Link>
        </li>
      );
    }

    return node;
  }

  render() {
    return (
      <nav className={ style.navigation }>
        <ul className={ style.list }>
          { this.renderSignInOrOut() }
          <li className={ style.listItem }>
            <Link to='/about'>{ 'About' }</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

Navigation.propTypes = {
  authenticated: PropTypes.bool
};

export default connect(state => {
  return {
    authenticated: state.auth.authenticated
  };
})(Navigation);
