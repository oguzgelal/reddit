import React from "react";
import ReactDOM from "react-dom";
import { createContext } from "reclare";
import { ReclareProvider } from "react-reclare";
import registerServiceWorker from "registerServiceWorker";
import { injectGlobal } from "styled-components";
import { FocusStyleManager } from "@blueprintjs/core";

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "react-virtualized/styles.css";

import initialState from "config/initial-state";
import * as settings from "ducks/settings.duck";
import * as feed from "ducks/feed.duck";

import App from "App";

// Global styles
injectGlobal`
  html, body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
`;

// Enable accessibility mode only on Tab
FocusStyleManager.onlyShowFocusOnTabs();

// Create Reclare context
const ctx = createContext({
  initialState,
  ducks: [settings, feed],
});

ReactDOM.render(
  <ReclareProvider context={ctx}>
    <App />
  </ReclareProvider>,
  document.getElementById("root"),
);

registerServiceWorker();
