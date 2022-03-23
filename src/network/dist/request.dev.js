"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = request;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function request(config) {
  // 1.创建axios的实例
  var instance = _axios["default"].create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  }); // 2.axios的拦截器
  // 2.1.请求拦截的作用


  instance.interceptors.request.use(function (config) {
    return config;
  }, function (err) {// console.log(err);
  }); // 2.2.响应拦截

  instance.interceptors.response.use(function (res) {
    return res.data;
  }, function (err) {
    console.log(err);
  }); // 3.发送真正的网络请求

  return instance(config);
}