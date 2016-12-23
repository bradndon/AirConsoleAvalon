import { QUEST_FINISH } from 'constants/ActionTypes'

export default function game(state={currentQuest:1}, action) {
  switch (action.type) {
    case QUEST_FINISH:
      return {
        ...state,
        currentQuest: state.currentQuest + 1
      }
    default:
      return state
  }
}
