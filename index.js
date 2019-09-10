const electron = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;

electron.app.on('ready', function () {

    mainWindow = new electron.BrowserWindow({
        width: 400, 
        height: 300,
        title: 'Convert Number to Words by Gordon'
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.on('closed', function () {
        electron.app.quit();
    });

    const mainMenu = electron.Menu.buildFromTemplate(mainMenuTemplate);
    electron.Menu.setApplicationMenu(mainMenu);

});

const mainMenuTemplate = [];