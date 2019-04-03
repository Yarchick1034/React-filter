import React from "react";
import ReactDOM from "react-dom";

import "antd/dist/antd.css";
import "./stylesheets/common.scss";

import App from "./App";

const render = (Component) => {
  ReactDOM.render(<Component />, document.getElementById("root"));
};

render(App);

if (module.hot) {
  module.hot.accept("./App", () => render(App));
}
