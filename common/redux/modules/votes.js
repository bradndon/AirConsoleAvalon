import { ADD_VOTE, UNVOTE_PLAYER, VOTE_PLAYER, SET_STATE, START_GAME, VOTE_SET_VOTE } from 'constants/ActionTypes'
import { createSelector } from 'reselect'

export function addVote (quest, leader) {
  return {
    type: ADD_VOTE,
    quest,
    leader
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

export function setVote(deviceId, isApproving) {
  return {
    type: VOTE_SET_VOTE,
    deviceId,
    isApproving
  }
}

const initialVoteState = {
  players: {},
  quest: {},
  votes: {},
}

function vote(state = initialVoteState, action) {
  switch (action.type) {
    case VOTE_PLAYER:
      return {
        ...state,
        players: {
          ...state.players,
          [action.deviceId]: !state.players[action.deviceId],
        },
      }
    case VOTE_SET_VOTE:
      return {
        ...state,
        votes: {
          ...state.votes,
          [action.deviceId]: action.isApproving
        }
      }
    default:
      return state
  }
}

const initialState = []

export default function votes (state = initialState, action) {
  switch (action.type) {
    case ADD_VOTE:
      return [
        ...state,
        {
          players: {},
          quest: action.quest,
          leader: action.leader,
          votes: {},
        },
      ]
    case START_GAME:
      return [
        ...state,
        {
          players: {},
          quest: 1,
          leader: action.deviceId
        },
      ]
    case VOTE_PLAYER:
    case VOTE_SET_VOTE:
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

export const currentVote = state => state.votes[state.votes.length-1] || {}

export const currentLimit = createSelector(
  currentVote,
  state => state.quests,
  (vote, quests)=> quests[vote.quest].playerCount
)

export const getPlayerCount = createSelector(
  currentVote,
  vote => Object.keys(vote.players).reduce((a,b)=> vote.players[b] === true ? a+1 : a, 0)
)

export const getPlayersOnQuest = createSelector(
  currentVote,
  state => state.players,
  (vote, players) => Object.keys(vote.players).filter((a)=> vote.players[a] === true).map(e=>players[e])
)

export const getPlayersOffQuest = createSelector(
  currentVote,
  state => state.players,
  (vote, players) => Object.keys(players).filter((e)=>typeof players[e] === 'object').filter((a)=> vote.players[a] !== true).map(e=>players[e])
)

export const atLimit = createSelector(
  getPlayerCount,
  currentLimit,
  (count, limit) => limit <= count
)
