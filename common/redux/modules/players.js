import { ADD_PLAYER, ADD_ROLE, JOIN_GAME, SET_STATE } from 'constants/ActionTypes'
import { createSelector } from 'reselect'

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
    deviceId
  }
}

export function addRole(role, deviceId) {
  return {
    type: ADD_ROLE,
    role,
    deviceId
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

const initialState = {}

export default function players (state = initialState, action) {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        [action.deviceId]: player(state[action.deviceId], action),
      }
    case ADD_ROLE:
      return {
        ...state,
        [action.deviceId]: player(state[action.deviceId], action),
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

export const getPlayerNames = createSelector(
  state=>state.players,
  players => Object.keys(players)
                    .map((e)=>typeof players[e] === 'object'? players[e]:null)
                    .filter((e)=>e)
                    .map((e)=>e.name)
)
