import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import UI from './UI'

class Main extends Component {

  render() {
    return (
      <main>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/ui/:ui' component={UI}/>
      </Switch>
      </BrowserRouter>
      </main>
    )
  }
}

export default Main