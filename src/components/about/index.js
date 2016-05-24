import AboutPresentation from './about-presentation'
import AboutContainer from './about-container'

/**
 * Export each sub module to allow each part to be either extended or used indiviually.
 */
module.exports = {
  AboutPresentation,
  AboutContainer,
  About: AboutContainer(AboutPresentation)
}

export var test = 10
