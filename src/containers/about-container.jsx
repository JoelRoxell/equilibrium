import {connect} from 'react-redux'
import About from 'components/about'

export default connect((state) => {
  return {
    ...state.app.about
  }
}, () => {
  return {}
})(About)
