"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = exports.details = exports.memoryList = exports.memoryCount = exports.count = void 0;
var db = wx.cloud.database();
var w = db.command;
var db_word = db.collection('word');
/**
 * 总单词长度
 * @param type plan 陌生词长度
 */
var count = function (type) {
    if (type === 'plan')
        return db_word.where({
            memory: w.and(w.exists(false))
        }).count();
    return db_word.count();
};
exports.count = count;
/**
 * 已有记忆单词长度
 */
var memoryCount = function () {
    return db_word.where({
        memory: w.and(w.exists(true), w.neq(''))
    }).count();
};
exports.memoryCount = memoryCount;
/**
 * 记忆单词list
 */
var memoryList = function (size) {
    return db_word.where({
        memory: w.and(w.exists(true), w.neq(''))
    }).skip(size).limit(20).get();
};
exports.memoryList = memoryList;
/**
 * 单词详情
 */
var details = function (value) {
    return db_word.doc(value).get();
};
exports.details = details;
/**
 * 随机单词
 * 默认全部随机，plan随机陌生词
 */
var random = function (num, type) {
    if (type === 'plan')
        return db_word.where({
            memory: w.exists(false)
        }).skip(num).limit(1).get();
    return db_word.skip(num).limit(1).get();
};
exports.random = random;
