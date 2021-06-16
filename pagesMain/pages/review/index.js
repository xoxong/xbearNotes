"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../../api/index");
Page({
    data: {
        total: 0,
        size: 1,
        curIndex: -1,
        details: {},
        list: [],
        isEnd: false,
        isMoreLoading: false
    },
    onLoad: function () {
        this.init();
    },
    onShow: function () {
    },
    init: function () {
        this.getCount();
    },
    getCount: function () {
        var _this = this;
        index_1.default.word.memoryCount().then(function (res) {
            _this.setData({ total: res.total });
            _this.getList();
        });
    },
    getList: function () {
        var _this = this;
        index_1.default.word.memoryList(this.data.size).then(function (res) {
            var list = __spreadArrays(_this.data.list, res.data);
            _this.setData({
                list: list,
                isEnd: res.data.length < 20 || list.length >= _this.data.total
            });
        });
    },
    handleitem: function (e) {
        this.setData({ curIndex: e.currentTarget.dataset.index });
        this.getDetails(e.currentTarget.dataset.item._id);
    },
    getDetails: function (v) {
        var _this = this;
        index_1.default.word.details(v).then(function (res) {
            var details = res.data;
            details.tags2 = details.tags.join('/');
            if (details) {
                _this.setData({ details: details });
            }
        });
    },
    onPullDownRefresh: function () {
        wx.stopPullDownRefresh();
    },
    onReachBottom: function () {
        if (this.data.isEnd)
            return;
        this.setData({
            isMoreLoading: true,
            size: this.data.size += 1
        });
        this.getList();
    }
});
