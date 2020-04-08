import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./util/createMuiTheme";
import jwtDecode from "jwt-decode";
import axios from "axios";
import "./App.css";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { SET_AUTHENTICATED } from "./redux/types.js";
import { logoutUser, getUserData } from "./redux/actions/userActions.js";
// Components
import Navbar from "./components/layout/Navbar.js";
import AuthRoute from "./util/AuthRoute.js";
// Pages
import home from "./pages/home.js";
import login from "./pages/login.js";
import signup from "./pages/signup.js";

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={home} />
                <AuthRoute exact path="/login" component={login} />
                <AuthRoute exact path="/signup" component={signup} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
