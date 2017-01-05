import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { MainContainer, MenuContainer, VoteContainer, PlayerChooserContainer, ResultsContainer, RoleContainer }
  from 'controller/containers'
import { syncHistoryWithStore } from 'react-router-redux'
import store from 'redux/store'

const history = syncHistoryWithStore(hashHistory, store)

const routes = (
  <Router history={history}>
    <Router path='/' component={MainContainer}>
      <IndexRoute component={MenuContainer}/>
      <Route path='/role' component={RoleContainer}/>
      <Route path='/players' component={PlayerChooserContainer}/>
      <Route path='/vote' component={VoteContainer}/>
      <Route path='/results' component={ResultsContainer}/>
    </Router>
  </Router>
)

export default routes
