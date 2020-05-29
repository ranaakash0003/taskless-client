import React from "react";
import Home from "./pages/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router";
import store from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <div className="App">
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={SignUp}></Route>
          </div>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
