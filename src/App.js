import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
        </Switch>
      </Router>
    );
  }
}

export default App;