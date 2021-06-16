import * as _ from 'underscore';
import api from '../../api/index';
Page(<any>{
  data: {
    allTotal: undefined,
    mTotal: undefined,
    pllTotal: undefined
  },
  onLoad () {
  },
  onShow () {
    this.init()
  },
  init () {
    api.word.count().then((res) => {
      this.setData({ allTotal: res.total })
    })
    api.word.count('plan').then((res) => {
      this.setData({ pllTotal: res.total })
    })
    api.word.memoryCount().then((res) => {
      this.setData({ mTotal: res.total })
    })
  },
  jumpRandom () {
    wx.navigateTo({
      url: '/pagesMain/pages/random/index'
    })
  },
  jumpPlan () {
    wx.navigateTo({
      url: '/pagesMain/pages/random/index?type=2'
    })
  },
  jumpReview () {
    wx.navigateTo({
      url: '/pagesMain/pages/review/index'
    })
  },
  jumpExercise () {
    wx.navigateTo({
      url: '/pagesMain/pages/exercise/index'
    })
  },
  onPullDownRefresh () {
    wx.stopPullDownRefresh()
  },
  onReachBottom () {
  },
  onShareAppMessage () {
    return {
      title: `一起来学英语吧`
    }
  },
  onShareTimeline () {
    return {
      title: `一起来学英语吧`
    }
  }
})
export {}

