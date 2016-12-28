import React from 'react'
import { Router, hashHistory, IndexRoute } from 'react-router'
import MainContainer from '../containers/Main/MainContainer'
import MenuContainer from '../containers/Menu/MenuContainer'



const routes = (
  <Router history={hashHistory}>
    <Router path="/" component={MainContainer}>
      <IndexRoute component={MenuContainer}/>
    </Router>
  </Router>
)

export default routes
