import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { actions } from 'flow/auth';

class Signin extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    signInUser: PropTypes.func,
    dispatch: PropTypes.func
  };

  handleFormSubmit = ({ email, password }) => {
    console.log(email, password);
    this.props.dispatch(actions.signInUser({ email, password }));
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.handleFormSubmit) }>
        <div>
          <label>Email</label>
          <Field
            name='email'
            component='input'
            type='text'
            placeholder='email'
          />
        </div>
        <div>
          <label>Password</label>
          <Field
            name='password'
            component='input'
            type='password'
            placeholder='password'
          />
        </div>
        <button
          action='submit'
          className=''
        >
          Sign in
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, null, actions)(Signin);
