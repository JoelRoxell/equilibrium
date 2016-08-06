import { expect } from 'helpers/test-helper'; // eslint-disable-line

import App, { styles } from 'components/app';
import Title from 'components/title';

describe('#Initial tests setup', function() {
  it('-Render App component', function() {
    const container = document.getElementById('app'),
      _node = renderComponent(App, container, {}),
      className = styles.app;

    expect(_node.className).to.equal(className);
  });

  it('-Render Title', function() {
    const container = document.getElementById('app'),
      _node = renderComponent(Title, container, {
        title: 'App Title'
      });

    expect(_node.innerText).to.equal('App Title');
  });
});
