import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
// 1 jenkins 发布
// --------package.json  脚本命令------------
//  cross-env  允许往全局注入变量
//  如果运维是根据相同的命令打包 只注入环境变量 可以通过 process.env.NODE_ENV全局变量获取
//  或者可以根据当前注入的环境变量 重新自定义一个环境变量
//
// "build": "cross-env NODE_ENV=test  node script.js",

//  根据运维不同环境脚本的打包命令 去读取对应环境的脚本  然后全局注入变量 可以访问全局变量process.env.NODE_ENV获取
//  --mode test 表示读取.env.test文件 全局注入一个变量 process.env.xxx 获取
// "build:test": "NODE_ENV=test vue-cli-service build --mode test",    /* 也可以可以把--mode 去了 */
// "build:prod": "NODE_ENV=prod vue-cli-service build --mode prod",   /* 也可以把--mode 去了 */
// "lint": "vue-cli-service lint --fix"
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
