import { QUEST_ADD_VOTE, QUEST_SET_VOTE } from 'constants/ActionTypes'

const initialState = {
  1: {
    votes: {}
  },
  2: {
    votes: {}
  },
  3: {
    votes: {}
  },
  4: {
    votes: {}
  },
  5: {
    votes: {}
  }
}

function quest(state={}, action) {
  switch (action.type) {
    case QUEST_ADD_VOTE:
      return {
        ...state,
        votes: {
          ...state.votes,
          [action.voteId]: true
        }
      }
    case QUEST_SET_VOTE:
      return {
        ...state,
        finalVote: action.voteId
      }
    default:
      return state
  }
}

export default function quests(state=initialState, action) {
  if (action.questId !== undefined) {
    return {
      ...state,
      [action.questId]: quest(state[action.questId], action)
    }
  } else {
    return state
  }
}
