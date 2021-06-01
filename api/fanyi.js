"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fanyi = void 0;
// 还未分类的接口
var request_1 = require("../utils/request");
/**
 * 文章详情
 */
var fanyi = function (params) {
    return request_1.default.get('https://openapi.youdao.com/api', params);
};
exports.fanyi = fanyi;
