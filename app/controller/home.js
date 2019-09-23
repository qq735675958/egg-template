'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async index() {
    await this.ctx.render('index');
  }

  async getData() {
    const { ctx } = this;
    const data = await this.service.home.index();
    ctx.body = data;
  }

}

module.exports = HomeController;
