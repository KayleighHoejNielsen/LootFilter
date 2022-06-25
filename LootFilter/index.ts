import { app, BrowserWindow } from 'electron';
import path = require('node:path');

app.on('ready', () => {
    console.log('App is ready');

    const window: BrowserWindow = new BrowserWindow({
        autoHideMenuBar: true,
        width: 600,
        height: 400
    });

    const indexHTML: string = path.join(__dirname + '/index.html');
    window.loadFile(indexHTML).then(() => {
        // IMPLEMENT FANCY STUFF HERE
    });
});