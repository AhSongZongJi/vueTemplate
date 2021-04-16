import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
// 1 jenkins 发布
// --------package.json  脚本命令------------
//  cross-env  允许往全局注入变量
//  如果运维不是根据不同的命令打包 只注入环境变量 可以根据全局process.env.NODE_ENV获取
// "build": "cross-env NODE_ENV=test node script.js",
//   根据运维不通的打包命令 去读取不同的文件  然后全局注入变量 可以访问全局变量process.env.自定义的变量名称获取

// cross-env NODE_ENV=production
// NODE_ENV = production vue 打包机制才会认为是生产模式  才会代码压缩 路由hash 加时间戳  这样发布各个版本 不会有缓存

// "build:test": "NODE_ENV=production vue-cli-service build --mode test",
// "build:prod": "NODE_ENV=production vue-cli-service build --mode prod",
// "lint": "vue-cli-service lint --fix"
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
