import AirConsole from 'airconsole-api/airconsole-1.6.0.js'
import store from 'redux/store'

const airconsole = new AirConsole()


airconsole.onMessage = function(device_id, action) {
  store.dispatch(action)
}

export default airconsole
