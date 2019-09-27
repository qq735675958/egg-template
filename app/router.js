'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller,io} = app;
  // router.get('/', controller.home.index);
  router.post('/login', controller.login.login);
  router.get('/getdata', controller.home.getData);
  io.of('/').route('request',io.controller.socketio.index);
  // io.of('/').route('server', io.controller.home.server);
};
