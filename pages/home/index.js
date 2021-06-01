"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Page({
    data: {
        isRendering: false // 是否渲染组件,优化首屏加载能力
    },
    onLoad: function () {
        this.init();
        this.setData({
            isRendering: true
        });
    },
    onShow: function () {
    },
    /**
     * 初始化函数
     */
    init: function () { },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        wx.stopPullDownRefresh();
    },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
    }
});
