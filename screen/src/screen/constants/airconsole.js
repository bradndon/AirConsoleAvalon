import AirConsole from 'airconsole-api/airconsole-1.6.0.js'
import store from 'redux/store'
import { setState } from 'redux/modules/game'
import { push } from 'react-router-redux'

const airconsole = new AirConsole()

airconsole.onMessage = function(device_id, action) {
  store.dispatch(action)
  airconsole.broadcast(setState(store.getState()))
  if (action.route) {
    airconsole.broadcast(push(action.route))
    store.dispatch(push(action.route))
  }
}

export default airconsole
