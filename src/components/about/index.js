import _AboutPresentation from './about-presentation';
import _AboutContainer from './about-container';

/**
 * Export each sub module to allow each part to be either extended or used indiviually.
 */
export default _AboutContainer(_AboutPresentation);
export const AboutPresentation = _AboutPresentation,
  AboutContainer = _AboutContainer,
  About = (function() {
    return _AboutContainer(_AboutPresentation);
  })();
