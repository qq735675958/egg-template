'use strict';

const Service = require('egg').Service;
const jwt = require('jsonwebtoken')

class loginService extends Service {
    async login() {
        const ctx = this.ctx;
        const signData = this.app.config.jwt.singar.data;
        const { userName, pwd } = ctx.request.body;
        
        const token = jwt.sign({
            user_id: 1,
            userName: userName
        }, signData, { expiresIn: '30s' })
        ctx.session.token = token;
        const data = {
            token: token,
            userName: userName,
            role: [userName]
        }
        return data
    }
}

module.exports = loginService;