import { ADD_PLAYER, ADD_ROLE, JOIN_GAME, SET_STATE, START_GAME } from 'constants/ActionTypes'
import { createSelector } from 'reselect'
import roleConfig from 'constants/roleConfig'
import shuffle from 'utils/shuffle'

const initialPlayerState = {
  deviceId: '',
  name: '',
  role: '',
}

export function addPlayer(name, deviceId) {
  return {
    type: ADD_PLAYER,
    name,
    deviceId,
  }
}

export function joinGame(deviceId) {
  return {
    type: JOIN_GAME,
    deviceId,
  }
}

export function addRole(role, deviceId) {
  return {
    type: ADD_ROLE,
    role,
    deviceId,
  }
}

function player ( state=initialPlayerState, action) {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        deviceId: action.deviceId,
        name: action.name,
      }
    case ADD_ROLE:
      return {
        ...state,
        role: action.role,
      }
    default:
      return state
  }
}

function assignRoles(state, playerCount) {
  let roles = shuffle(roleConfig[playerCount])
  let deviceIds = Object.keys(state).map((e)=>typeof state[e] === 'object'? e:null).filter((e)=>e)
  let newPlayers = {}
  for (var i = 0; i < deviceIds.length; i++) {
    newPlayers[deviceIds[i]] = player(state[deviceIds[i]], {type: ADD_ROLE, role: roles[i]})
  }
  return newPlayers
}

const initialState = {}

export default function players (state = initialState, action) {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        [action.deviceId]: player(state[action.deviceId], action),
      }
    case START_GAME:
      return {
        ...state,
        ...assignRoles(state, action.playerCount),
      }

    case JOIN_GAME:
      return {
        ...state,
        deviceId: action.deviceId,
        hasJoined: true,
      }
    case SET_STATE:
      return {
        ...state,
        ...action.state.players,
      }
    default:
      return state
  }
}

export const getPlayers = createSelector(
  state=>state.players,
  players => Object.keys(players)
                    .map((e)=>typeof players[e] === 'object'? players[e]:null)
                    .filter((e)=>e)
)

export const getPlayerNames = createSelector(
  getPlayers,
  players => players.map((e)=>e.name)
)
