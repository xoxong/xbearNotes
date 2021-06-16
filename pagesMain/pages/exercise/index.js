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
        chinese: '',
        isUnfold: false,
        total: 0,
        size: 1,
        curIndex: -1,
        details: {},
        list: [],
        isEnd: false,
        isError: false,
        errorMsg: '',
        isOk: false
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
            var isEnd = res.data.length < 20 || list.length >= _this.data.total;
            _this.setData({
                list: list,
                isEnd: isEnd,
                details: list[0],
                curIndex: 0,
                size: isEnd ? 1 : _this.data.size += 1
            });
        });
    },
    onChange: function (e) {
        var v = e.detail;
        this.setData({ chinese: v });
        this.matchData(v);
    },
    matchData: _.debounce(function (val) {
        var str = this.data.details.explains.map(function (e) { return e.n; }).join(',');
        var isErr = str.indexOf(val) === -1;
        this.setData({
            isOk: !isErr,
            isError: isErr,
            errorMsg: isErr ? '内容不匹配' : ''
        });
    }, 400),
    handlePrev: function () {
        var index = this.data.curIndex += 1;
        if (index > this.data.list.length - 1) {
            index = 0;
            this.setData({ list: [] });
            this.getList();
        }
        this.setData({
            isUnfold: false,
            isOk: false,
            curIndex: index,
            chinese: '',
            details: this.data.list[index]
        });
    },
    handleOpen: function () {
        this.setData({
            isUnfold: true,
            isError: false,
            errorMsg: '',
            isOk: true
        });
    },
    onPullDownRefresh: function () {
        wx.stopPullDownRefresh();
    },
    onReachBottom: function () {
    }
});
