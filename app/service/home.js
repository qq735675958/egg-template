const Service = require('egg').Service;

class HomeService extends Service {
  async index() {
    const msg = {
        msg:"hello world"
    }
    return msg;
  }
}

module.exports = HomeService;