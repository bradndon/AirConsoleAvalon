const ADD_VOTE = 'ADD_VOTE'
const VOTE_PLAYER = 'VOTE_PLAYER'
const UNVOTE_PLAYER = 'UNVOTE_PLAYER'

export function addVote (quest, playerLimit) {
  return {
    type: ADD_VOTE,
    quest,
    playerLimit,
  }
}

function votePlayer (deviceId) {
  return {
    type: VOTE_PLAYER,
    deviceId,
  }
}

function unvotePlayer (deviceId) {
  return {
    type: UNVOTE_PLAYER,
    deviceId,
  }
}

export function voteOrUnvotePlayer (deviceId) {
  return function (dispatch, getState)  {
    let currentVote = getState().votes[getState().votes.length-1]
    let currentCount = Object.keys(currentVote.players)
      .reduce((a,b)=> currentVote.players[b] === true ? a+1 : a, 0)
    if (currentVote.players[deviceId]) {
      dispatch(unvotePlayer(deviceId))
    } else {
      if (currentCount < currentVote.playerLimit) {
        dispatch(votePlayer(deviceId))
      }
    }
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
          [action.deviceId]: true,
        },
      }
    case UNVOTE_PLAYER:
      return {
        ...state,
        players: {
          ...state.players,
          [action.deviceId]: false,
        },
      }
    default:
      return state
  }
}

export default function votes (state = [{
  players: {},
  quest: {},
  playerLimit: 4,
}], action) {
  switch (action.type) {
    case ADD_VOTE:
      return [
        ...state.concat({
          players: {},
          quest: action.quest,
          playerLimit: action.playerLimit,
        }),
      ]
    case VOTE_PLAYER:
      return [
          ...state.slice(0, votes.length-1),
          vote(state[state.length-1], action),
        ]
    case UNVOTE_PLAYER:
      return [
          ...state.slice(0, votes.length-1),
          vote(state[state.length-1], action),
        ]
    default:
      return state
  }
}
