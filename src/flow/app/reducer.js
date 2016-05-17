import * as types from './actions'

const initalState = {
  about: {
    title: 'About this project',
    description: 'Description about this project',
    bullets: [
      'BulletOne',
      'BulletTwo',
      'BulletThree'
    ]
  }
}

function app(state = initalState, action = {}) {
  switch (action.type) {
    case types.SET_TITLE:
      return {
        about: {
          ...state.about,
          title: action.title
        }
      }
    default:
      return state
  }
}

export default app
