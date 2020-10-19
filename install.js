const config = importModule('https://raw.githubusercontent.com/free163dom/Scriptable/main/config.js');

let alert = new Alert();
alert.title = 'ENV';
alert.message = config;
alert.presentAlert();
