import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { MainContainer, MenuContainer, VoteContainer, PlayerChooserContainer }
  from 'containers'


const routes = (
  <Router history={hashHistory}>
    <Router path='/' component={MainContainer}>
      <IndexRoute component={MenuContainer}/>
      <Route path='/players' component={PlayerChooserContainer}/>
      <Route path='/vote' component={VoteContainer}/>
    </Router>
  </Router>
)

export default routes
