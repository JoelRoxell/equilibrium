import React, { Component } from 'react';
import RenderField from './field';
import { Field } from 'redux-form';

class Input extends Component {
  render() {
    return (
      <Field
        { ...this.props }
        className='input-field'
        component={ RenderField }
      />
    );
  }
}

export default Input;
