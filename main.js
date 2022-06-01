const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');
const { menubar } = require('menubar');

const mb = menubar({});

function onReady() {
  win = new BrowserWindow({ width: 900, height: 6700 });
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, 'dist/apps/busts/index.html'),
      protocol: 'file:',
      slashes: true,
    })
  );
}

app.on('ready', onReady);
