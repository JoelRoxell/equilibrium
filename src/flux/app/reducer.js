import * as types from './actions';

const initalState = {
  language: 'en_US',
  about: {
    title: 'About this project',
    description: `A condition in which all acting influences are canceled by others,
      resulting in a stable, balanced, or unchanging system.`
  }
};

/**
 * General app reducer
 * @param  {Object} state  Inital state.
 * @param  {Object} action Redux action descriptor.
 * @return {Object}        Next state.
 */
function app(state = initalState, action = {}) {
  switch (action.type) {
    case types.SET_PROP:
      return {
        ...state,
        ...action.prop
      };
    case types.SET_TITLE:
      return {
        ...state,
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
