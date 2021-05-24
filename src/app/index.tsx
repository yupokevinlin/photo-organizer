import React from "react";
import ReactDOM from "react-dom";

import { AppContainer } from "react-hot-loader";

import App from "./App";

const mainElement: HTMLElement | null = document.getElementById("root");
if (!!mainElement) {
  document.body.appendChild(mainElement);
  document.body.style.margin = "0";
  document.body.style.height = "100%";
  document.body.style.width = "100%";
  document.body.style.overflow = "hidden";

  const render = (Component: () => JSX.Element) => {
    ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      mainElement
    );
  };

  render(App);
}
