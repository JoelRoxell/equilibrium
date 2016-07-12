import React from 'react';
import Route from 'react-router';
import About from 'components/about';

const AboutRoute = () => {
  return (
    <Route path='about' component={ About } />
  );
};

export default AboutRoute;
