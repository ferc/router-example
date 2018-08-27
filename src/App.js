import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import SectionOne, { ROUTE_PATTERN as SectionOneRoute } from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree, { ROUTE_PATTERN as SectionThreeRoute } from './SectionThree'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>App</h1>
        </header>

        <ul>
          <li><Link to="/section-one">Section One</Link></li>
          <li><Link to="/section-two">Section Two</Link></li>
          <li><Link to="/section-three">Section Three</Link></li>
        </ul>

        <Switch>
          <Route path={SectionOneRoute} component={SectionOne} />
          <Route path="/section-two" component={SectionTwo} />
          <Route path={SectionThreeRoute} component={SectionThree} />
        </Switch>
      </div>
    )
  }
}

export default App
