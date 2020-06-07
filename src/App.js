import React, { Component } from "react";
import "./App.css";
import StudentsPage from "./Pages/StudentsPage";
import ContactPage from "./Pages/ContactPage";
import UserIdPage from "./Pages/UserIdPage";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={StudentsPage} />
          <Route exact path="/contact/:id" component={ContactPage} />
          <Route exact path="/user/:id" component={UserIdPage} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
