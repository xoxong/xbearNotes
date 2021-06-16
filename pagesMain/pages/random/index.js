"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("underscore");
var index_1 = require("../../../api/index");
Page({
    data: {
        type: 1,
        index: 0,
        total: 0,
        details: {},
        list: []
    },
    onLoad: function (options) {
        this.setData({ type: options.type });
        this.init();
    },
    onShow: function () {
    },
    init: function () {
        var _this = this;
        index_1.default.word.count().then(function (res) {
            _this.setData({ total: res.total });
            _this.getWord();
        });
    },
    getWord: function () {
        var num = this.getRandom();
        this.getDetails(num);
    },
    getDetails: function (num) {
        var _this = this;
        index_1.default.word.random(num, 'plan').then(function (res) {
            var v = res.data[0];
            if (v) {
                v.tags2 = v.tags.join('/');
                _this.setData({ details: v });
            }
        });
    },
    getRandom: function () {
        var res = Math.floor(Math.random() * this.data.total);
        //@ts-ignore
        if (_.indexOf(this.data.list, res) === -1) {
            this.setData({ list: __spreadArrays(this.data.list, [res]) });
            return res;
        }
        return this.getRandom();
    },
    handlePrev: function () {
        if (this.data.index < 1)
            return;
        var index = this.data.index -= 1;
        this.getDetails(this.data.list[index]);
        this.setData({ index: index });
    },
    handleNext: function () {
        var index = this.data.index += 1;
        if (index > this.data.list.length - 1)
            this.getWord();
        else {
            this.getDetails(this.data.list[index]);
        }
        this.setData({ index: index });
    },
    onPullDownRefresh: function () {
        wx.stopPullDownRefresh();
    },
    onReachBottom: function () {
    }
});
