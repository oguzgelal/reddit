import React from "react";
import { connect } from "react-reclare";
import styled, { ThemeProvider } from "styled-components";

import Home from "containers/pages/Home";

import darkTheme from "config/theme-default-dark";
import lightTheme from "config/theme-default-light";

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

const Root = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${p => p.theme.background};
`;

const App = props => (
  <ThemeProvider theme={themes[props.theme]}>
    <Root>
      <Home />
    </Root>
  </ThemeProvider>
);

export default connect(state => ({
  theme: state.theme,
}))(App);
