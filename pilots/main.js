const { app } = require('electron')

const Window = require('./Window')

function main(){
    let mainWindow = new Window({
        file: 'index.html',
    })
}

app.on('ready', main)

app.on('Window-all-closed', () => app.quit())