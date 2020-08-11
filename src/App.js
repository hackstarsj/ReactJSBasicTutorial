import React from "react";
import Main from "./Main";
import About from "./About";
import Contact from "./Contact";
import BasicExample from "./BasicExample";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AjaxGetExample from "./AjaxGetExample";
import AjaxPostExample from "./AjaxPostExample";
import CartExample from "./CartComponentExample";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/basicexample" component={BasicExample}></Route>
          <Route exact path="/cartexample" component={CartExample}></Route>
          <Route
            exact
            path="/ajaxgetexample"
            component={AjaxGetExample}
          ></Route>
          <Route
            exact
            path="/ajaxpostexample"
            component={AjaxPostExample}
          ></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
