import React from 'react'
import { Router, hashHistory, IndexRoute, Route } from 'react-router'
import { MainContainer, MenuContainer, ChosenContainer, VoteContainer, ResultsContainer } from 'screen/containers'
import { syncHistoryWithStore } from 'react-router-redux'
import store from 'redux/store'

const history = syncHistoryWithStore(hashHistory, store)

const routes = (
  <Router history={history}>
    <Router path='/' component={MainContainer}>
      <IndexRoute component={MenuContainer}/>
      <Route path='/players' component={ChosenContainer}/>
      <Route path='/vote' component={VoteContainer}/>
      <Route path='/results' component={ResultsContainer}/>
    </Router>
  </Router>
)

export default routes
