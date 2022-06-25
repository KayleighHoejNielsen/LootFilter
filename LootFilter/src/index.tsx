import * as React from "react";
import * as ReactDOM from "react-dom";
import Wrapper from "./wrapper";

window.onload = () => {
    console.log("this thing ");
    ReactDOM.render(<Wrapper />, document.getElementById("app"));
};