import React, {
  Component,
  PropTypes
} from 'react';
import Title from 'components/title';
import { Navigation } from 'components/navigation';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Title title={ 'TGIF - Thank god it\'s friday' } />
        <Navigation />
        <div className='app-view'>
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
