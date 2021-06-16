"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fanyi = require("./fanyi");
var word = require("./word");
var api = {
    /**
     * 翻译相关api
     */
    fanyi: fanyi,
    /**
     * 单词相关
     */
    word: word
};
exports.default = api;
