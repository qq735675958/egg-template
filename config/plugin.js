'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  ejs:{
    enable: true,
    package: 'egg-view-ejs',
  },
  cors:{
    enable: true,
    package: 'egg-cors',
  },
  io:{
    enable: true,
    package: 'egg-socket.io',
  }
};
