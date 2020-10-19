/* 支付宝小组件 */

class Alipay {
    constructor(arg) {
        this.arg = arg;
        this.size = config.widgetFamily;
    }

    // 渲染
    async setSize() {
        if (this.size === 'medium') {
            // 中等尺寸
        }
        else if (this.size === 'large') {
            // 大型尺寸
        } 
        else {
            // 小尺寸
            return await this.small();
        }
    }

    // 小尺寸
    async small() {
        let widget = new ListWidget();
        widget.backgroundColor = new Color("1181ff");
        let titleStack = widget.addStack();
        let titleElement = titleStack.addText('test!');
        titleElement.textColor = Color.white();
        titleElement.font = Font.mediumSystemFont(16);
        return widget;
    }

    // 生产环境
    async prod() {
        let widget = this.setSize();
        Script.setWidget(widget);
        Script.complete();
    }

    // 开发环境
    async dev() {
        let widget = this.setSize();
        // widget.presentMedium();
        // widget.presentLarge();
        widget.presentSmall();
        Script.complete();
    }
}

// module.exports = Alipay;

await new Alipay().prod();