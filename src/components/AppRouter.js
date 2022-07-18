import React from 'react'
import Home from './Home';
import createHistory from 'history/createBrowserHistory';
// import Portfolio from './Portfolio';
import { Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import Contact from './Contact';
import Header from './Header';


export const history = createHistory();

function AppRouter() {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route component={Home} />
      </Switch>

    </Router>

  )
}
// <Route path="/portfolio" exact component={Portfolio} />
export default AppRouter;