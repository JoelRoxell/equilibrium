import firebaseService from 'services/firebase';
import { browserHistory } from 'react-router';
import {
  SIGNING_IN,
  AUTH_USER
} from './types';

/**
 * Sign in user action creator
 *
 * @param  {String} email     user email
 * @param  {String} password  user passowrd
 * @return {function}         wrapped action creator
 */
export function signInUser({ email, password }) {
  return function(dispatch) {
    firebaseService.signIn({ email, password }, res => {
      dispatch({ type: AUTH_USER });
      browserHistory.push('/about');
    });

    dispatch({ type: SIGNING_IN });
  };
}

/**
 * Create a new user
 * @param  {String} email    valid email
 * @param  {String} password passowrd >= 6 length
 * @return {function}        wrapped action creator
 */
export function createUser({ email, password }) {
  return function(dispatch) {
    firebaseService.createUser({ email, password }, res => {
      console.log(res);
    });
  };
}
