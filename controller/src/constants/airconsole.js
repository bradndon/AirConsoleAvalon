import AirConsole from 'airconsole-api/airconsole-1.6.0.js'

const airconsole = new AirConsole()

airconsole.onMessage = function(device_id, data) {
  console.warn(data)
}
export default airconsole
