import * as React from "react";
import GenerateSection from "../organisms/generateSection";

export default class Body extends React.Component<{}> {
    render() {
        return (
            <div>
                <h3>A Simple React Component Example with Typescript</h3>
                <GenerateSection />
            </div>
        );
    }
}