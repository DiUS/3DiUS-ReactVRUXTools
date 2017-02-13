import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './src/components/App'
import VRScene from './src/components/VRScene'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="vr-scene" component={VRScene} />
  </Router>
), document.getElementById('app'))
