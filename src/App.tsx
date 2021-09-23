import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import NotLogedin from "./pages/NotLogedIn";
import LogedIn from "./pages/Logedin";
import { BrowserRouter as Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={NotLogedin} />
        <Route path="/user" exact component={LogedIn} />
      </Switch>
    </>
  );
};

export default App;
