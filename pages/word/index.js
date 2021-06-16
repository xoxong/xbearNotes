"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../api/index");
Page({
    data: {
        allTotal: undefined,
        mTotal: undefined,
        pllTotal: undefined
    },
    onLoad: function () {
    },
    onShow: function () {
        this.init();
    },
    init: function () {
        var _this = this;
        index_1.default.word.count().then(function (res) {
            _this.setData({ allTotal: res.total });
        });
        index_1.default.word.count('plan').then(function (res) {
            _this.setData({ pllTotal: res.total });
        });
        index_1.default.word.memoryCount().then(function (res) {
            _this.setData({ mTotal: res.total });
        });
    },
    jumpRandom: function () {
        wx.navigateTo({
            url: '/pagesMain/pages/random/index'
        });
    },
    jumpPlan: function () {
        wx.navigateTo({
            url: '/pagesMain/pages/random/index?type=2'
        });
    },
    jumpReview: function () {
        wx.navigateTo({
            url: '/pagesMain/pages/review/index'
        });
    },
    jumpExercise: function () {
        wx.navigateTo({
            url: '/pagesMain/pages/exercise/index'
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
