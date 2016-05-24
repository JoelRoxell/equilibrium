import _AboutPresentation from './about-presentation'
import _AboutContainer from './about-container'

/**
 * Export each sub module to allow each part to be either extended or used indiviually.
 */
export const AboutPresentation = _AboutPresentation
export const AboutContainer = _AboutContainer
export const About = (function() {
  return _AboutContainer(_AboutPresentation)
})()
