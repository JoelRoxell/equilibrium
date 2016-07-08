import { combineReducers } from 'redux';
import app from '../app';
import auth from '../auth';
import { reducer as form } from 'redux-form';

export default combineReducers({
  app,
  form,
  auth
});
