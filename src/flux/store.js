import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';

createStore(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f);

function configureStore() {
  const store = createStore(reducers, compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index.js');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default configureStore();
