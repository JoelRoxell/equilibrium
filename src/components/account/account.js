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
            <span> { `
              "But I, being poor, have only my dreams.
              I have spread my dreams under your feet.
              Tread softly because you tread on my dreams."
            ` }</span>
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
