/* 加载器 */

class Loader {
    constructor() {
        this.args = args.widgetParameter;
        this.widgetName = '';
        this.widgetArgs = '';
    }

    // 获取文件
    getFiles() {
        // https://raw.githubusercontent.com/free163dom/Scriptable/main/loader.js
        let req = new Request(`https://raw.githubusercontent.com/free163dom/Scriptable/main/main/${encodeURIComponent(this.opt['name'])}/${encodeURIComponent(this.opt['version'])}.js?_=${+new Date}`)
        let data = await req.loadString()
    }
}

const loader = new Loader();

if (config.runsInWidget) {
    // 小组件形式渲染

}
else {
    // APP内更新数据

}

Script.complete();