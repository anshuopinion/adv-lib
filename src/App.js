import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./theme/globalStyles";
import { ThemeProvider } from "styled-components";

import Login from "./pages/Login";
import Student from "./pages/Student";
import theme from "./theme/theme";
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Switch>
          <Route path="/student">
            <Student />
          </Route>
          <Route path="/teacher">
            <Student />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
