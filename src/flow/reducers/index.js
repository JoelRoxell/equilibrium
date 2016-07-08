import { combineReducers } from 'redux';
import app from '../app';
import { reducer as form } from 'redux-form';

export default combineReducers({
  app,
  form
});
