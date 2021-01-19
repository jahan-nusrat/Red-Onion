import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import { ConnectedRouter } from "connected-react-router";
import history from "./history";

import Home from "../pages/home";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";

const App = () => {
  return (
    <Suspense fallback={<div>Loader</div>}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </ConnectedRouter>
    </Suspense>
  );
};

export default App;

/*
<Route path="/:id/:slug">
          <NavBar />
          <FoodItem />
          <Footer />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <PrivateRoute path="/cart">
          <NavBar />
          <Cart />
          <Footer />
        </PrivateRoute>
        <Route path="/user-info">
          <NavBar />
          <User />
        </Route>
        <Route path="/complete-order">
          <NavBar />
          <OrderComplete />
          <Footer />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>



        import OrderComplete from "../pages/order-complete/OrderComplete";
import PrivateRoute from "../components/private-route/PrivateRoute";
import User from "../pages/User";
import Error404 from "../pages/Error404";


import LogIn from "../pages/LogIn";
import Cart from "../pages/cart/Cart";
import SignUp from "../pages/SignUp";
import FoodItem from "../pages/FoodItem";
*/
