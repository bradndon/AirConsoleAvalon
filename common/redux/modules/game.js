import { QUEST_FINISH, SET_STATE, START_GAME } from 'constants/ActionTypes'

export function setState(state) {
  return {
    type: SET_STATE,
    state,
  }
}

export function startGame(deviceId, playerCount) {
  return {
    type: START_GAME,
    deviceId,
    playerCount,
    route: '/role',
  }
}

export default function game(state={currentQuest:1}, action) {
  switch (action.type) {
    case QUEST_FINISH:
      return {
        ...state,
        currentQuest: state.currentQuest + 1,
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
