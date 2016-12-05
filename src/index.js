import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import LangSelector from './components/LangSelector'


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/language-selector" component={LangSelector}/>
  </Router>
), document.getElementById('root'))
