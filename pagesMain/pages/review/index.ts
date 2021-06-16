import * as _ from 'underscore';
import api from '../../../api/index';

Page(<any>{
  data: {
    total: 0,
    size: 1,
    curIndex: -1,
    details: {},
    list: [],
    isEnd: false,
    isMoreLoading: false
  },
  onLoad () {
    this.init()
  },
  onShow () {
  },
  init () {
    this.getCount()
  },
  getCount () {
    api.word.memoryCount().then((res: any) => {
      this.setData({ total: res.total })
      this.getList()
    })
  },
  getList () {
    api.word.memoryList(this.data.size).then((res: any) => {
      const list = [...this.data.list, ...res.data]
      this.setData({
        list,
        isEnd: res.data.length < 20 || list.length >= this.data.total
      })
    })
  },
  handleitem (e: CEvent.datasetAny) {
    this.setData({ curIndex: e.currentTarget.dataset.index })
    this.getDetails(e.currentTarget.dataset.item._id)
  },
  getDetails(v: string) {
    api.word.details(v).then((res: any) => {
      let details = res.data
      details.tags2 = details.tags.join('/')
      if (details) {
        this.setData({ details })
      }
    })
  },
  onPullDownRefresh () {
    wx.stopPullDownRefresh()
  },
  onReachBottom () {
    if (this.data.isEnd) return
    this.setData({
      isMoreLoading: true,
      size: this.data.size += 1
    })
    this.getList()
  }
})
export {}

