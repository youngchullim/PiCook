import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Splash from './splash/splash';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import DBRecipeByNameContainer from './meals_db_recipes/db_recipes_by_name_container'

import RecipeContainer from './recipes/recipe_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Route exact path="/" component={Splash} />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/dbmeals" component={DBRecipeByNameContainer} />
      <ProtectedRoute path="/recipes" component={RecipeContainer} />
    </Switch>
  </div>
);

export default App;