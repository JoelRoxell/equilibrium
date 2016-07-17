import firebaseService from 'services/firebase';
import { hashHistory } from 'react-router';
import {
  SIGNING_IN,
  AUTH_USER,
  DEAUTH_USER,
  AUTH_ERROR,
  REGISTRATION_ERROR,
  CREATE_USER
} from './types';

/**
 * Sign in user action creator
 *
 * @param  {String} email     User email.
 * @param  {String} password  User password.
 * @return {function}         Wrapped action creator.
 */
export function signInUser({ email, password }) {
  return function(dispatch) {
    firebaseService.signIn({ email, password }).then(res => {
      dispatch({ type: AUTH_USER });
      hashHistory.push('/about');
    }).catch(err => {
      dispatch(authError(err.message));
    });

    dispatch({ type: SIGNING_IN });
  };
}

/**
 * Create a new user.
 *
 * @param  {String} email    Valid email.
 * @param  {String} password Password >= 6 length.
 *
 * @return {function} Wrapped action creator.
 */
export function createUser({ email, password }) {
  return function(dispatch) {
    dispatch({
      type: CREATE_USER, payload: {
        email,
        password
      }
    });
    firebaseService.createUser({ email, password }).then(res => {
      dispatch({ type: AUTH_USER });
      hashHistory.push('/about');
    }).catch(err => {
      dispatch(registrationError(err.message));
    });
  };
}

/**
 * Sign out user.
 *
 * @return {function} Wrapped action creator.
 */
export function deauthUser() {
  return function(dispatch) {
    firebaseService.signOut();
    dispatch({ type: DEAUTH_USER });
  };
}

/**
 * Pass an error message to the user.
 *
 * @param  {String} error Message to be displayed.
 *
 * @return {Object} Error action object.
 */
export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

/**
 * Pass registration error to user.
 *
 * @param {String} error Error message.
 *
 * @return {Object} Error action object.
 */
export function registrationError(error) {
  return {
    type: REGISTRATION_ERROR,
    payload: error
  };
}
