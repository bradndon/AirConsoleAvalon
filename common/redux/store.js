import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import * as reducers from 'redux/modules'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import { hashHistory } from 'react-router'

const middleware = routerMiddleware(hashHistory)


export default createStore(combineReducers({...reducers, routing: routerReducer}),
  compose(
    applyMiddleware(middleware),
    window.devToolsExtension ? window.devToolsExtension() : (f)=>f,
  ))
