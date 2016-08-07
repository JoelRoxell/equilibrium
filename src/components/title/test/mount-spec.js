import { expect } from 'helpers/test-helper';

import Title from 'components/title';

describe('#Title component', function() {
  it('-Classname is mapped', function() {
    const container = document.getElementById('app'),
      _node = renderComponent(Title, container, {
        title: 'App Title'
      });

    expect(_node.innerText).to.equal('App Title');
  });
});
