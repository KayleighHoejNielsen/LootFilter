import * as React from "react";
import * as ReactDOM from "react-dom";
import Wrapper from "./components/pages/wrapper";

window.onload = () => {
    console.log("Here's my log");
    ReactDOM.render(<Wrapper />, document.getElementById("app"));
};