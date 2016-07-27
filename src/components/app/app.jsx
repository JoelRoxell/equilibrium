import React, {
  Component,
  PropTypes
} from 'react';
import STRING from 'services/language';

import Title from 'components/title';
import { Navigation } from 'components/navigation';

class App extends Component {
  componentWillMount() {
    console.log(STRING.APP.TITLE);
    STRING.use(this);
  }

  render() {
    return (
      <div className='app'>
        <Title title={ STRING.APP.TITLE } />
        <Navigation />
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

export default App;
