import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";




function App() {
  return (
    <Router>
    <Switch>
      <Route exact path= "/home" component= {Dashboard} />
      <Route exact path= "/" component = {Login} />
      <Route exact path = "/signup" component = {Signup} />
      </Switch>
    </Router>
  );
}

export default App;
