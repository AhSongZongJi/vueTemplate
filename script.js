const childProcess = require('child_process');

const env = process.env.NODE_ENV;

childProcess.execSync(`cross-env NODE_ENV=production VUE_APP_ENV=${env} vue-cli-service build`);
