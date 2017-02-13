import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { routes } from './config.routes.js'
import data from './data/site.json'
import Header from './components/Header'
import Home from './components/Home'

const Wrapper = styled.section`
  padding-top: 70px;

`

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes} />
  )} />
)

const NoMatch = ({ location }) => (
  <h3>No match for <code>{location.pathname}</code></h3>
)

class App extends Component {
  render () {
    return (
      <Router>
        <Wrapper>
          <Header data={data} />
          <Switch>
            <Route path='/' exact component={Home} />
            {routes.map((route, i) => (
              <RouteWithSubRoutes data key={i} {...route} />
            ))}
            <Route component={NoMatch} />
          </Switch>
        </Wrapper>
      </Router>

    )
  }
}

export default App
