import React from 'react'
import ReactDOM from 'react-dom';
import routes from 'config/routes';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, combineReducers} from 'redux'
import airconsole from 'constants/airconsole'
import * as reducers from 'redux/modules'

const store = createStore(combineReducers({...reducers}),
  window.devToolsExtension ? window.devToolsExtension() : (f)=>f)

console.warn("Version 0.0.2")
ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
)
