import React, { Component, PropTypes } from 'react';

class Account extends Component {
  render() {
    let className = 'account';

    return (
      <div className={ className }>
        <div className={ `${className}-header` }>
          <div className={ `${className}-welcome-text` }>
            { `Welcome` }
          </div>
          <div className={ `${className}-title` }>
            { `Sign in,` }
            <span> { `some more descriptive text.` }</span>
          </div>
        </div>
        <div className='account-view'>
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
