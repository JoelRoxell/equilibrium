import {
  SIGNING_IN,
  AUTH_USER,
  DE_AUTH
} from './actions';

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
        authenticated: true
      };
    case SIGNING_IN:
      return {
        ...state,
        loading: true
      };
    case DE_AUTH:
      return {
        ...state,
        authenticated: false
      };
    default:
      return state;
  }
}
