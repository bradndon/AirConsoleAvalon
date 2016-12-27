import { createStore, combineReducers } from 'redux'
import * as reducers from 'redux/modules'

export default createStore(combineReducers({...reducers}),
  window.devToolsExtension ? window.devToolsExtension() : (f)=>f)
