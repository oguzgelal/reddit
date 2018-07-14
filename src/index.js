import React from "react";
import ReactDOM from "react-dom";
import { createContext } from "reclare";
import { ReclareProvider } from "react-reclare";
import registerServiceWorker from "registerServiceWorker";
import { injectGlobal } from "styled-components";
import { FocusStyleManager } from "@blueprintjs/core";

import * as settings from "ducks/settings.duck";

import App from "App";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "react-virtualized/styles.css";

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
  initialState: {
    theme: "light",
  },
  ducks: [settings],
});

ReactDOM.render(
  <ReclareProvider context={ctx}>
    <App />
  </ReclareProvider>,
  document.getElementById("root"),
);

registerServiceWorker();
