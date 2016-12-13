
const ADD_PLAYER = 'ADD_PLAYER'
const ADD_ROLE = 'ADD_ROLE'

const initialPlayerState = {
  deviceId: '',
  name: '',
  role: '',
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
    default:
      return state
  }
}


export default function players (state = {deviceId: 0}, action) {
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
    default:
      return state
  }
}
