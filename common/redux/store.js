import { createStore, combineReducers } from 'redux'
import * as reducers from 'redux/modules'
import { routerReducer } from 'react-router-redux'

export default createStore(combineReducers({...reducers, routing: routerReducer}),
  window.devToolsExtension ? window.devToolsExtension() : (f)=>f)
