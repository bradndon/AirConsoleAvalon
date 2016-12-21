import airconsole from 'constants/airconsole'
import AirConsole from 'airconsole/airconsole-1.6.0.js'

const ADD_PLAYER = 'ADD_PLAYER'
const ADD_ROLE = 'ADD_ROLE'


const initialPlayerState = {
  deviceId: '',
  name: '',
  role: '',
  chosen: false,
}

export function addPlayer(name, deviceId) {
  return {
    type: ADD_PLAYER,
    name,
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

const initialState = {
  1: {
    'name': 'Brandon',
    'deviceId': 1,
  },
  2: {
    'name': 'Geneva',
    'deviceId': 2,
  },
  3: {
    'name': 'Dana',
    'deviceId': 3,
  },
  4: {
    'name': 'Kenzie',
    'deviceId': 4,
  },
}

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
