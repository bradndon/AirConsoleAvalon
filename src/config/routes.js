import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import MainContainer from '../containers/Main/MainContainer'
import MenuContainer from '../containers/Menu/MenuContainer'
import PlayerChooserContainer from '../containers/PlayerChooser/PlayerChooserContainer'


const routes = (
  <Router history={hashHistory}>
    <Router path="/" component={MainContainer}>
      <IndexRoute component={MenuContainer}/>
      <Route path="/players" component={PlayerChooserContainer}/>
    </Router>
  </Router>
)

export default routes
