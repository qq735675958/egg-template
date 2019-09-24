'use strict';
const Controller = require('egg').Controller;

class loginController extends Controller {

    async login() {
        const data = await this.service.login.login();
        this.ctx.body = data;
    }
}

module.exports = loginController;