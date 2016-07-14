import React, { PropTypes } from 'react';
import { classNames } from 'helpers';
import style from './style/button';

const SubmitButton = ({ className, text }) => {
  return (
    <button
      action='submit'
      className={ classNames(style.commonFormSubmitButton, className) }
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
