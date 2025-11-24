const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html')
};

app.whenReady().then(() => {
  createWindow()

    ipcMain.handle('ping', () => {
        console.log('ping method was called');
        return 'pong';
    });

    ipcMain.on('message', handleMessage);
    //  Because windows cannot be created before the ready event, you should only listen for activate events after your app is initialized.
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


function handleMessage (event, message) {
    console.log("Esto es una prueba de envio de parametros")
  const webContents = event.sender
  console.log("mensaje: ", message)
  const win = BrowserWindow.fromWebContents(webContents)
  win.setTitle(message)
}