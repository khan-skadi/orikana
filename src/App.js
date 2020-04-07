import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

// Components
import Navbar from "./components/Navbar.js";

// Pages
import home from "./pages/home.js";
import login from "./pages/login.js";
import signup from "./pages/signup.js";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#af52bf",
      main: "#9c27b0",
      dark: "#6d1b7b",
      contrastText: "#fff",
    },
    secondary: {
      light: "#91ff35",
      main: "#76ff03",
      dark: "#52b202",
      contrastText: "#fff",
    },
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/login" component={login} />
                <Route exact path="/signup" component={signup} />
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
