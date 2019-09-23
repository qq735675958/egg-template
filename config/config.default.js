/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1569211352848_6629';

  // 配置需要的中间件，数组顺序即为中间件的加载顺序
  config.middleware = [ 'gzip','notfoundHandler' ],

  config.gzip = {
    threshold:512,
  }

  // add your user config here
  const userConfig = {
    myAppName: 'myProject',
  };

  /**
   * egg-view-ejs 模板渲染配置
   * @property { String } defaultExtension - 默认模板渲染引擎
   * @property { Object } mapping - 模板文件后缀及渲染引擎映射关系
   */
  config.view = {
    defaultExtension:'.html',
    mapping: {
      '.html': 'ejs',
    },
  };

  /**
   * egg-static 静态文件配置
   * @property { String } prefix - 静态文件默认前缀
   * @property { String } dir - 静态文件所在目录
   */
  
  config.static = {
    prefix:'/',
    dir:path.join(appInfo.baseDir,'app/public/')
  }

  /**
   * egg-onerror 异常处理配置
   */
  config.onerror = {
    all(err,ctx){
      //在此定义针对所有响应类型的错误处理方法
      //注意 定义了 config.all 之后，其他错误处理方法不会再生效
      ctx.set('X-Error-Message',encodeURI(err.message));
      ctx.status = 500;
      ctx.response.message = 'Server Internal Error'
    }
  }

  /**
   * exports.security 安全配置
   */
  exports.security = {
    csrf: {
      enable: false,
    },
    // xframe: {
    //   enable: false,
    // },
  }

  /**
   * 跨域配置
   */
  exports.cors = {
    // {string|Function} origin: '*',
    // {string|Array} allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    // credentials:true,
  };
 

  return {
    ...config,
  };
};
