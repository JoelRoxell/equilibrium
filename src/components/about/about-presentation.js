import React, { PropTypes } from 'react';
import style from './style/about';
/**
 * About presentational component.
 *
 * @param  {String} title Application title.
 * @param  {String} description Breif application description.
 * @param  {Array<String>}  bullets Array of string bullets.
 *
 * @return {StatelessComponent} React component.
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
