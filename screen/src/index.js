import ReactDOM from 'react-dom';
import routes from 'config/routes';
import './index.css';
import airconsole from 'constants/airconsole'

console.warn(airconsole)

ReactDOM.render(
   routes,
  document.getElementById('root')
)
