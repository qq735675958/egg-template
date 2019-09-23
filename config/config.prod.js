/* eslint valid-jsdoc: "off" */

'use strict';

/**生产配置，会覆盖开发环境配置
 * @param {Egg.EggAppInfo} appInfo app info
 * 
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  

  return {
    ...config,
  };
};
