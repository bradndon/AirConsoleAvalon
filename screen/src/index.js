import React from 'react'
import ReactDOM from 'react-dom';
import routes from 'config/routes';
import './index.css';
import { Provider } from 'react-redux'
import store from 'redux/store'
import airconsole from 'constants/airconsole'

console.warn("Version 0.0.3")
ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
)
