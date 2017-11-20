import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { App, HomeComponent, packageDependencyManager } from './components';

const routes = (
  <HashRouter>
    <div>
      <Route path='/' component={App} />
      <Route exact={true} path='/' component={HomeComponent} />
      <Route exact={true} path='/' component={packageDependencyManager} />
    </div>
  </HashRouter>
);

export default routes;
