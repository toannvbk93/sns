import * as React from 'react';
import { hashHistory, IndexRoute, Route, Router } from 'react-router';
import { Top, User } from './components/common/';
import Content from './components/common/content';
import { App } from './app';
export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Content} />
        <Route path="/top" component={Top} />
        <Route path="/user" component={User} />
      </Route>
    </Router>
  );
}