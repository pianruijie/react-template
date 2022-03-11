

module.exports = class {
    constructor() {
        console.log('模板初始化');
    }
    apply(compiler) {
        compiler.hooks.compilation.tap('test', compilation => {
            console.log('customPlugin')
        });
    }
};
