import React, { Component, PropTypes } from 'react';

class Account extends Component {
  render() {
    return (
      <div>
        Account page
        <div>
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
