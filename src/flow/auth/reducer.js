import {
  SIGNING_IN,
  AUTH_USER,
  DEAUTH_USER,
  AUTH_ERROR,
  REGISTRATION_ERROR
} from './types';

/**
 * Authentication reducer
 *
 * @param  {Object} state  current state
 * @param  {Object} action reduxt action object
 * @return {Object}        next state
 */
export default function(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: true,
        loading: false
      };
    case SIGNING_IN:
      return {
        ...state,
        loading: true
      };
    case DEAUTH_USER:
      return {
        ...state,
        authenticated: false,
        loading: false
      };
    case AUTH_ERROR:
    case REGISTRATION_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
