import * as types from './actions';

const initalState = {
  about: {
    title: 'About this project',
    description: `A condition in which all acting influences are canceled by others,
      resulting in a stable, balanced, or unchanging system.`
  }
};

/**
 * General app reducer
 * @param  {Object} state  initalState
 * @param  {Object} action Redux action descriptor
 * @return {Object}        next state
 */
function app(state = initalState, action = {}) {
  switch (action.type) {
    case types.SET_TITLE:
      return {
        about: {
          ...state.about,
          title: action.title
        }
      };
    default:
      return state;
  }
}

export default app;
