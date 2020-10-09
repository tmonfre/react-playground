import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  ClassComponent,
  Functional,
} from './screens';

const FallBack = () => {
  return <div>URL not found</div>;
};

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/class" component={ClassComponent} />
          <Route path="/functional" component={Functional} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
