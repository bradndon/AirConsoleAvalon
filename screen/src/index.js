import ReactDOM from 'react-dom';
import routes from 'config/routes';
import './index.css';
import airconsole from 'constants/airconsole'

console.warn("Version 0.0.2")
ReactDOM.render(
   routes,
  document.getElementById('root')
)
