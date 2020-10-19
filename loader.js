/* 加载器 */

class Loader {
    constructor() {

    }
}

const loader = new Loader();

if (config.runsInWidget) {
    let alert = new Alert();
    alert.title = 'Env';
    alert.message = 'widget';
}
else {
    let alert = new Alert();
    alert.title = 'Env';
    alert.message = 'APP';
}
Script.complete()