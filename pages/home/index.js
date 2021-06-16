"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("underscore");
var index_1 = require("../../api/index");
var CryptoJS = require("crypto-js");
var db = wx.cloud.database();
var db_word = db.collection('word');
Page({
    data: {
        isZh: false,
        details: {},
        zhList: [],
        value: 'mount'
    },
    onLoad: function () {
        this.onSearch();
    },
    handleItem: function (e) {
        var value = e.currentTarget.dataset.item.replace(/[^a-zA-Z]/g, '');
        this.setData({ value: value });
        this.onSearch();
    },
    onChange: function (e) {
        this.setData({ value: e.detail.toLowerCase() });
    },
    onSearch: _.debounce(function () {
        var _this = this;
        index_1.default.word.details(this.data.value).then(function (res) {
            var details = res.data;
            details.tags2 = details.tags.join('/');
            if (details) {
                _this.setData({ details: details });
                return;
            }
        }).catch(function () { _this.handleSearch(_this.data.value); });
    }, 300),
    handleSearch: function (v) {
        var _this = this;
        var pattern = new RegExp("[\u4E00-\u9FA5]+");
        var isZh = !!pattern.test(v);
        var time = Math.round(new Date().getTime() / 1000);
        var salt = (new Date).getTime();
        index_1.default.fanyi.fanyi({
            q: v,
            appKey: '5878e6dcc56449a0',
            salt: salt,
            from: 'en',
            to: 'zh-CHS',
            signType: 'v3',
            curtime: time,
            sign: CryptoJS.SHA256("5878e6dcc56449a0" + v + salt + time + "kClbKAwTbQXmkA58WKA7d6yp4sFy0XTU").toString(CryptoJS.enc.Hex)
        }).then(function (res) {
            var data = res.data;
            if (!data.basic) {
                _this.setData({ isZh: false, zhList: [] });
                return;
            }
            var explains = data.basic && data.basic.explains;
            if (isZh && explains) {
                _this.setData({ isZh: isZh, zhList: explains });
                return;
            }
            // 正确词语
            if (data.basic) {
                var details = {
                    _id: v,
                    key: v,
                    tags: data.basic.exam_type,
                    tags2: data.basic.exam_type && data.basic.exam_type.join(' / '),
                    explains: data.basic.explains.map(function (v) {
                        return {
                            t: v.split('. ')[0] + '.',
                            n: v.split('. ')[1],
                        };
                    }),
                    phonetic: {
                        us: {
                            str: '/' + data.basic['us-phonetic'] + '/',
                            speech: data.basic['us-speech']
                        },
                        uk: {
                            str: '/' + data.basic['uk-phonetic'] + '/',
                            speech: data.basic['uk-speech']
                        }
                    }
                };
                var db_data = __assign({}, details);
                delete db_data['tags2'];
                db_word.add({
                    data: db_data,
                    success: function () { },
                    fail: function () { }
                });
                return;
            }
        });
    },
    onPullDownRefresh: function () {
        wx.stopPullDownRefresh();
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function () {
        return {
            title: "\u4E00\u8D77\u6765\u5B66\u82F1\u8BED\u5427"
        };
    },
    onShareTimeline: function () {
        return {
            title: "\u4E00\u8D77\u6765\u5B66\u82F1\u8BED\u5427"
        };
    }
});
