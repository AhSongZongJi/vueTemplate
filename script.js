const childProcess = require('child_process');

const env = process.env.NODE_ENV;
//  "build" "cross-env NODE_ENV=test node script.js", 针对于运维只执行 npm run build 脚本 发布版本 不跟对应的环境脚本需要自己处理
childProcess.execSync(`cross-env NODE_ENV=production VUE_APP_ENV=${env} vue-cli-service build`);
