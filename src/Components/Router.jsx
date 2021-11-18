import React from 'react';

import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from '../App';
import AboutMe from './AboutMe';

const Router = () =>(
<BrowserRouter >
<Switch>
  <Route path="/" component={App}  exact/>
  <Route path="/AboutMe/" component={AboutMe} />
</Switch>
</BrowserRouter>
);
export default Router;