const DEV_HTTP_URL = "https://威海.开发.信息谷.com";
const PRO_HTTP_URL = "https://威海.开发.信息谷.com";
const DEV_HTTP_IMG = "https://img-dev.xinxigu.com.cn";
const PRO_HTTP_IMG = "https://img-dev.xinxigu.com.cn";

export const BASE_URL = process.env.NODE_ENV === 'development' ? DEV_HTTP_URL:PRO_HTTP_URL

