
const ADD_PLAYER = 'ADD_PLAYER'
const ADD_ROLE = 'ADD_ROLE'
const CHOOSE_PLAYER = 'CHOOSE_PLAYER'

export function choosePlayer(deviceId) {
  return {
    type: CHOOSE_PLAYER,
    deviceId
  }
}

const initialPlayerState = {
  deviceId: '',
  name: '',
  role: '',
  chosen: false
}

function player ( state=initialPlayerState, action) {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        deviceId: action.deviceId,
        name: action.name
      }
    case ADD_ROLE:
      return {
        ...state,
        role: action.role
      }
    case CHOOSE_PLAYER:
      return {
        ...state,
        chosen: !state.chosen
      }
    default:
      return state
  }
}

const initialState = {
  deviceId: 0,
  1: {
    'name': 'Brandon',
    'chosen': false,
    'deviceId': 1
   }
}

export default function players (state = initialState, action) {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        [action.deviceId]: player(state[action.deviceId], action)
      }
    case ADD_ROLE:
      return {
        ...state,
        [action.deviceId]: player(state[action.deviceId], action)
      }
    case CHOOSE_PLAYER:
      return {
        ...state,
        [action.deviceId]: player(state[action.deviceId], action)
      }
    default:
      return state
  }
}
