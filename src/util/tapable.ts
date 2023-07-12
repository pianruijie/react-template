import {Function} from 'lodash';
import {SyncHook} from 'tapable';
// 粗略模拟webpack的插件机制
class B {
  public hooks: any;
  constructor() {
    this.hooks = {
      makeHook: new SyncHook(['make']),
      compileHook: new SyncHook(['compile'])
    };
  }
  make() {
    // xxxxx
    // ...
    // xxx
    this.hooks.makeHook.call('this is make');
  }
  compile() {
    // xxxxx
    // ...
    // xxx
    this.hooks.compileHook.call('this is compile');
  }
  run() {
    this.make();
    this.compile();
  }
}
class A {
  private compilation: B;
  private plugins: any[];
  constructor(plugin: any[]) {
    this.compilation = new B();
    this.plugins = plugin;
    this.plugins.forEach(fn => fn(this.compilation));
  }
  run() {
    this.compilation.run();
  }
}
const plugin1 = (compilation: B) => {
  compilation.hooks.makeHook.tap('plugin1', (desc: any) => {
    console.log(desc);
  });
};
const plugin2 = (compilation: B) => {
  compilation.hooks.compileHook.tap('plugin2', (desc: any) => {
    console.log(desc);
  });
};
export const compileIns = new A([plugin1, plugin2]);
