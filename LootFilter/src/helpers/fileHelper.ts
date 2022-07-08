import * as fs from "fs";
import * as path from "path";

export const readCSV = (filename: string): string => {
    let fileContents: any;

     fs.readFile(
        path.join(__dirname, "./LootFilter/src/data"),
        "utf8",
        (error, data) => {
            // ...
            fileContents = data;
         }
    );
    console.log(fileContents);

    return fileContents.toString();
}