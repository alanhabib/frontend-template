import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages";
import { createGlobalStyle } from "styled-components";
import SignInPage from "./pages/signin";

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
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SignInPage} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
