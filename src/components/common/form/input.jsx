import React, { Component } from 'react';
import { Field } from 'redux-form';
import { classNames } from 'helpers';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = { active: false };
  }

  onFocus = () => {
    this.setState({ active: true });
  }

  onBlur = () => {
    this.setState({ active: false });
  }

  render() {
    return (
      <div className='input'>
        <Field
          { ...this.props }
          className='input-field'
          onFocus={ this.onFocus }
          onBlur={ this.onBlur }
        />
        <div className={ classNames('input-marker', {
          active: this.state.active
        }) }>
        </div>
      </div>
    );
  }
}

export default Input;
