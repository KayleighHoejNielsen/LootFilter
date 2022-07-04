import * as React from "react";
import { readCSV } from "../../helpers/fileHelper";
import GenerateSection from "../organisms/generateSection";

export default class Body extends React.Component<{}> {
    render() {
        readCSV("test.csv");

        return (
            <div>
                <h3>A Simple React Component Example with Typescript</h3>
                <GenerateSection />
            </div>
        );
    }
}