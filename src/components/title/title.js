import React, { PropTypes } from 'react';
import style from './style/title.styl';

const Title = ({ title }) => {
  return (
    <div className={ style.title }>
      <h1>{ title }</h1>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string
};

export default Title;
