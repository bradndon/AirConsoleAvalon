import { QUEST_FINISH, SET_STATE } from 'constants/ActionTypes'

export function setState(state) {
  return {
    type: SET_STATE,
    state
  }
}

export default function game(state={currentQuest:1}, action) {
  switch (action.type) {
    case QUEST_FINISH:
      return {
        ...state,
        currentQuest: state.currentQuest + 1
      }
    case SET_STATE:
      return {
        ...state,
        ...action.state.game,
      }
    default:
      return state
  }
}
