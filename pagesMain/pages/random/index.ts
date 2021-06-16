import * as _ from 'underscore';
import api from '../../../api/index';

Page(<any>{
  data: {
    type: 1,
    index: 0,
    total: 0,
    details: {},
    list: []
  },
  onLoad (options: CPage.options) {
    this.setData({ type: options.type })
    this.init()
  },
  onShow () {
  },
  init () {
    api.word.count().then((res) => {
      this.setData({ total: res.total })
      this.getWord()
    })
  },
  getWord () {
    const num = this.getRandom()
    this.getDetails(num)
  },
  getDetails(num: number) {
    api.word.random(num, 'plan').then((res: any) => {
      const v = res.data[0]
      if (v) {
        v.tags2 = v.tags.join('/')
        this.setData({ details: v })
      }
    })
  },
  getRandom () {
    let res = Math.floor(Math.random() * this.data.total)
    //@ts-ignore
    if (_.indexOf(this.data.list, res) === -1) {
      this.setData({ list: [...this.data.list, res] })
      return res
    }
    return this.getRandom()
  },
  handlePrev () {
    if (this.data.index < 1) return
    const index = this.data.index -= 1
    this.getDetails(this.data.list[index])
    this.setData({ index })
  },
  handleNext () {
    const index = this.data.index += 1
    if (index > this.data.list.length -1) this.getWord()
    else {
      this.getDetails(this.data.list[index])
    }
    this.setData({ index })
  },
  onPullDownRefresh () {
    wx.stopPullDownRefresh()
  },
  onReachBottom () {
  }
})
export {}

