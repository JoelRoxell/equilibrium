import React, { PropTypes } from 'react';
import { classNames } from 'helpers';

const SubmitButton = ({ className, text }) => {
  return (
    <button
      action='submit'
      className={ classNames('common-form-submitButton', className) }
    >
      { text }
    </button>
  );
};

SubmitButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
};

export default SubmitButton;
