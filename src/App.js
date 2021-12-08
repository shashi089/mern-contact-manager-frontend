import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layouts/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";

import ContactState from "./context/contact/contactState";
import AuthState from "./context/auth/authState";
import AlertState from "./context/alert/alertState";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Navbar />
            <div className="container">
              <Alerts />
              <Switch>
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/register" component={Register} />
              </Switch>
            </div>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
