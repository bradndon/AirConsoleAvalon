import AirConsole from 'airconsole-api/airconsole-1.6.0.js'
import store from 'redux/store'
import { setState } from 'redux/modules/game'

const airconsole = new AirConsole()

airconsole.onMessage = function(device_id, action) {
  store.dispatch(action)
  airconsole.broadcast(setState(store.getState()))
}

export default airconsole
