import { ADD_VOTE, UNVOTE_PLAYER, VOTE_PLAYER, SET_STATE } from 'constants/ActionTypes'
import { createSelector } from 'reselect'

export function addVote (quest, playerLimit) {
  return {
    type: ADD_VOTE,
    quest,
    playerLimit,
  }
}

export function votePlayer (deviceId) {
  return {
    type: VOTE_PLAYER,
    deviceId,
  }
}

export function unvotePlayer (deviceId) {
  return {
    type: UNVOTE_PLAYER,
    deviceId,
  }
}

const initialVoteState = {
  players: {},
  quest: {},
  playerLimit: 0,
}

function vote(state = initialVoteState, action) {
  switch (action.type) {
    case ADD_VOTE:
      return {
        ...state,
        players: {},
        quest: action.quest,
        playerLimit: action.playerLimit,
      }
    case VOTE_PLAYER:
      return {
        ...state,
        players: {
          ...state.players,
          [action.deviceId]: !state.players[action.deviceId],
        },
      }
    default:
      return state
  }
}

const initialState = [{
  players: {},
  quest: {},
  playerLimit: 4,
}
]

export default function votes (state = initialState, action) {
  switch (action.type) {
    case ADD_VOTE:
      return [
        ...state,
        {
          players: {},
          quest: action.quest,
          playerLimit: action.playerLimit,
        },
      ]
    case VOTE_PLAYER:
      return [
          ...state.splice(0, state.length-1),
          vote(state[state.length-1], action),
        ]
    case SET_STATE:
      return [
        ...action.state.votes,
      ]
    default:
      return state
  }
}

export const currentVote = state => state.votes[state.votes.length-1]

export const getPlayerCount = createSelector(
  currentVote,
  vote => Object.keys(vote.players).reduce((a,b)=> vote.players[b] === true ? a+1 : a, 0)
)

export const atLimit = createSelector(
  getPlayerCount,
  currentVote,
  (count, vote) => vote.playerLimit <= count
)
