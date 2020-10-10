import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  ClassComponent,
  ConnectedComponent,
  FunctionalComponent,
} from './screens';

const FallBack = () => {
  return <div>URL not found</div>;
};

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/components/class" component={ClassComponent} />
          <Route path="/components/functional" component={FunctionalComponent} />
          <Route path="/components/connected" component={ConnectedComponent} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
