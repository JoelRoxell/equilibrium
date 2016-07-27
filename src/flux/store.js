import { createStore } from 'redux';
import reducers from 'flux/reducers';

export default createStore(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f);
