import { QUEST_ADD_VOTE, QUEST_SET_VOTE,
  QUEST_SUCCESS, QUEST_FAILURE,
  QUEST_ADD_SUCCESS,
  QUEST_ADD_FAIL } from 'constants/ActionTypes'

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

const initialState = {
  1: {
    votes: {},
    success: 0,
    fail: 0
  },
  2: {
    votes: {},
    success: 0,
    fail: 0
  },
  3: {
    votes: {},
    success: 0,
    fail: 0
  },
  4: {
    votes: {},
    success: 0,
    fail: 0
  },
  5: {
    votes: {},
    success: 0,
    fail: 0
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
    return state
  }
}
