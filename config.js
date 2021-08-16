export default {
  env: process.env.VUE_APP_ENV || 'prd',
  requestConfig: {
    dev: {
      base_url: 'https://dev.cn'
    },
    test: {
      base_url: 'https://test.cn'
    },
    pre: {
      base_url: 'https://pre.cn'
    },
    prd: {
      base_url: 'https://.com'
    }
  }
};
