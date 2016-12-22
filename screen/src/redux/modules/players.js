import { ADD_PLAYER, ADD_ROLE } from 'constants/ActionTypes'
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
    default:
      return state
  }
}

export const getPlayerNames = createSelector(
  state=>state,
  state => Object.keys(state).map((a)=>state[a].name)
)
