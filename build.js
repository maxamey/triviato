import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Create from './lib/Create'
import Active from './lib/ActiveGame'
import Index from './lib/Index'
import Games from './lib/Games'
import Nav from './lib/Nav'

render((
  <Router history={ hashHistory }>
    <Route path="/nav" component={ Nav }>
      <Route path="/" component={ Index }/>
      <Route path="/games" component={ Games }/>
      <Route path="/create" component={ Create }/>
      <Route path="/active/:game_id" component={ Active }/>
    </Route>
  </Router>
), document.getElementById('app'))
