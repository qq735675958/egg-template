'use strict';

const Controller = require('egg').Controller;

class SocketIOController extends Controller {
    async index() {
        const { ctx } = this;
        const message = ctx.args[0];   //接受第一个参数：消息参数判断执行哪个函数
        console.log(ctx.socket.emit);
        console.log(ctx.args[1])
        if (message === 'hello') {
            const { param } = ctx.args[1]  // 接受第二个参数：真正需要的参数
            // ...中间是具体的业务代码
            await ctx.socket.emit('sendData', '哈喽，我来了');   //消息名称'sendData'要和vue中一致，返回给客户端
        }
    }
}
module.exports = SocketIOController;

/**
 * 这里用到了 egg-socket.io 这个插件
 * 客户端 代码
 * mounted() {
    // console.log(this.$options)
    //客户端向服务端发送数据
    this.$socket.emit("request", "hello", { param: "this is a param" }); // 'request' 是由egg的router决定的，后面是传给egg.controller的具体参数

    if (!this.intervalData) {
      // 每五秒emit一次
      this.intervalData = setInterval(() => {
        this.$socket.emit("request", "hello", { param: "this is a param" });
      }, 5000);
    }
    //接收服务端的信息
    this.sockets.subscribe('sendData', (data) => {
      this.arr.push(data)
      console.log(data)
    })
  },
  beforeDestroy() {
    this.sockets.unsubscribe('sendData');
    if (this.intervalTime) {
      clearInterval(this.intervalTime);
      this.intervalTime = null;
    }
  }
 * sendData 为发送的字段
  Vue 采用的是 vue-socket.io 插件
  具体用法 看文档 
 *
 *
 * 
 */