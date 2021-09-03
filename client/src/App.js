import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home";
import { createGlobalStyle } from "styled-components";
import SignInPage from "./pages/signin";
import { Auth0Provider } from "@auth0/auth0-react";
import PageRenderer from "./page-renderer";
import Blog from "./pages/blog";

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  font-family: "Encode Sans Expanded", sans-serif;
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Blog} exact />
        {/* <Route path="/" render={() => <Redirect to="/" />} /> */}
        <Route path="/:page" component={PageRenderer} />
        {/* <Route path="/signin" component={SignInPage} exact /> */}
        <Route component={() => 404} />
      </Switch>
    </>
  );
}

export default App;
