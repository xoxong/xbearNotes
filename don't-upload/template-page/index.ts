import * as _ from 'underscore';
const appBehavior = require('../../behavior/app.js')
Page({
  behaviors: [appBehavior],
  data: {
    isRendering: false // 是否渲染组件,优化首屏加载能力
  },
  onLoad () {
    this.init()
    this.setData({
      isRendering: true
    })
  },
  onShow () {
  },
  /**
   * 初始化函数
   */
  init () {},
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    wx.stopPullDownRefresh()
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom () {
  }
})
export {}

