import ReactDOM from 'react-dom';
import routes from './config/routes';
import './index.css';
import AirConsole from 'airconsole/airconsole-1.6.0'

var airconsole = new AirConsole({"orientation": "portrait"});
airconsole.onMessage = function(device_id, data) {
  if (data.action === "PLAYER_JOIN") {
    
  }
}
ReactDOM.render(
   routes,
  document.getElementById('root')
);
