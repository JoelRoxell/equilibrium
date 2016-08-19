import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions } from 'flux/auth';
import style from './style/sign-out';

class SignOut extends Component {
  componentWillMount() {
    this.props.dispatch(actions.deauthUser());
  }

  render() {
    return (
      <div className={ style.signOut }>
        { `Your're now signed out.` }
      </div>
    );
  }
}

SignOut.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(SignOut);
