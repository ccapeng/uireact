import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import UI from './UI'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/component' component={UI}/>
    </Switch>
  </main>
)

export default App