import React, { PropTypes } from 'react';
import style from './style/about';
/**
 * About presentational component
 *
 * @param  {String} title cool title
 * @param  {String} description antoher desc
 * @param  {Array<String>}  bullets array of string bullets
 *
 * @return {StatelessComponent} dumb
 */
const About = ({ title, description, bullets }) => {
  return (
    <div className={ style.about }>
      <div className='about-title'>
        { title }
      </div>
      <div className='about-description'>
        { description }
      </div>
      <div className='about-bullet-wrapper'>
        { bullets.map((bullet, i) => {
          return (
            <p
              className='about-bullet'
              key={ i }
            >
              { bullet }
            </p>
          );
        }) }
      </div>
    </div>
  );
};

About.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  bullets: PropTypes.array
};

About.defaultProps = {
  bullets: []
};

export default About;
