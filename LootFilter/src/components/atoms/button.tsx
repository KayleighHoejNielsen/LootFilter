import * as React from "react";
import "./button.css";

export default class Button extends React.Component<{}> {
    render() {
        return (
            <div>
                <input className="button" type="text" />
            </div>
        );
    }
}