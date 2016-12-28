import React from 'react'
import { Router, hashHistory, IndexRoute, Route } from 'react-router'
import { MainContainer, MenuContainer, ChosenContainer } from 'screen/containers'



const routes = (
  <Router history={hashHistory}>
    <Router path="/" component={MainContainer}>
      <IndexRoute component={MenuContainer}/>
      <Route path="/players" component={ChosenContainer}/>
      <Route path="/vote" component={MenuContainer}/>
    </Router>
  </Router>
)

export default routes
