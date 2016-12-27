const ADD_PLAYER = 'ADD_PLAYER'
const JOIN_GAME = 'JOIN_GAME'


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

const initialState = {
  deviceId: 0,
  hasJoined: false,
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
    case JOIN_GAME:
      return {
        ...state,
        deviceId: action.deviceId,
        hasJoined: true,
      }
    default:
      return state
  }
}
