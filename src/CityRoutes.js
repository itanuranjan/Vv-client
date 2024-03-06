import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import MainHome from './Components/MainHome';
import NewYork from './components/NewYork';
// import AppStore from './Components/AppStore';

const CityRoutes = () => (
  <BrowserRouter>
    <Switch>
      
      <Route exact path="/cities/new-york" component={NewYork} />
      
    </Switch>
  </BrowserRouter>
);

export default CityRoutes;
