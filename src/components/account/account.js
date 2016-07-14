import React, { Component, PropTypes } from 'react';
import style from './style/account';

class Account extends Component {
  render() {
    return (
      <div className={ style.account }>
        <div className={ style.accountHeader }>
          <div className={ style.accountWelcomeText }>
            { `Welcome` }
          </div>
          <div className={ style.accountTitle }>
            { `Sign in,` }
            <span> { `some more descriptive text.` }</span>
          </div>
        </div>
        <div className={ style.accountView }>
          { this.props.children }
        </div>
      </div>
    );
  }
}

Account.propTypes = {
  children: PropTypes.element
};

export default Account;
