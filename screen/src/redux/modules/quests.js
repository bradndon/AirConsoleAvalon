import { QUEST_ADD_VOTE, QUEST_SET_VOTE, QUEST_SUCCESS, QUEST_FAILURE } from 'constants/ActionTypes'

export function questAddVote(questId, voteId) {
  return {
    type: QUEST_ADD_VOTE,
    questId,
    voteId
  }
}

export function questSetVote(questId, voteId) {
  return {
    type: QUEST_SET_VOTE,
    questId,
    voteId
  }
}

export function questSuccess(questId) {
  return {
    type: QUEST_SUCCESS,
    questId,
  }
}

export function questFail(questId) {
  return {
    type: QUEST_FAILURE,
    questId,
  }
}

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
    case QUEST_SUCCESS:
      return {
        ...state,
        hasSucceeded: true
      }
    case QUEST_FAILURE:
      return {
        ...state,
        hasSucceeded: false
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
