import React from 'react';
import ListAddressContainer from '../containers/ListAddressContainer';
import { Switch, Route } from 'react-router-dom';

const Routes = () => (	
  <Switch>
    <Route exact path="/" component={ListAddressContainer} />
  </Switch> 
);

export default Routes;
