import firebaseService from 'services/firebase';
import { hashHistory } from 'react-router';
import {
  SIGNING_IN,
  AUTH_USER,
  AUTH_ERROR
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
    firebaseService.signIn({ email, password }).then(res => {
      dispatch({ type: AUTH_USER });
      hashHistory.push('/about');
    }).catch(err => {
      console.log(err);

      dispatch(authError(err.message));
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
    firebaseService.createUser({ email, password }).then(res => {
      console.log(res);
    });
  };
}

/**
 * Error action creator used to pass an error message to the user.
 *
 * @param  {String} error Message to be displayed.
 * @return {Object}       Error action object.
 */
export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
