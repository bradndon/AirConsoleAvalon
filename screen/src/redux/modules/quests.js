import { QUEST_ADD_VOTE, QUEST_SET_VOTE,
  QUEST_FINISH,
  QUEST_ADD_SUCCESS,
  QUEST_ADD_FAIL, START_GAME } from 'constants/ActionTypes'
import questConfig from 'constants/questConfig'

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

export function questFinish(questId, hasSucceeded) {
  return {
    type: QUEST_FINISH,
    questId,
    hasSucceeded
  }
}

export function questAddSuccess(questId) {
  return {
    type: QUEST_ADD_SUCCESS,
    questId
  }
}

export function questAddFail(questId) {
  return {
    type: QUEST_ADD_FAIL,
    questId
  }
}

const initialState = {}

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
    case QUEST_FINISH:
      return {
        ...state,
        hasSucceeded: action.hasSucceeded
      }
    case QUEST_ADD_SUCCESS:
      return {
        ...state,
        success: state.success + 1
      }
    case QUEST_ADD_FAIL:
      return {
        ...state,
        fail: state.fail + 1
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
    switch(action.type) {
      case START_GAME:
        return questConfig[action.playerCount]
      default:
        return state
    }
  }
}
