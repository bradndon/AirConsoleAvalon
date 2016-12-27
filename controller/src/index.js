import React from 'react'
import ReactDOM from 'react-dom'
import routes from 'config/routes'
import { Provider } from 'react-redux'
import store from 'redux/store'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
   {routes}
  </Provider>,
  document.getElementById('root')
)
