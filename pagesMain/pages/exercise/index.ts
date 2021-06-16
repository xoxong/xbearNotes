import * as _ from 'underscore';
import api from '../../../api/index';

Page(<any>{
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
      const isEnd = res.data.length < 20 || list.length >= this.data.total
      this.setData({
        list,
        isEnd,
        details: list[0],
        curIndex: 0,
        size: isEnd ? 1 : this.data.size += 1
      })
    })
  },
  onChange (e: CEvent.datasetAny) {
    const v = e.detail
    this.setData({ chinese: v })
    this.matchData(v)
  },
  matchData: _.debounce(function (this: any, val: string) {
    const str = this.data.details.explains.map((e: any) => e.n).join(',')
    const isErr = str.indexOf(val) === -1
    this.setData({
      isOk: !isErr,
      isError: isErr,
      errorMsg: isErr ? '内容不匹配' : ''
    })
  }, 400),
  handlePrev () {
    let index = this.data.curIndex += 1
    if (index > this.data.list.length - 1) {
      index = 0
      this.setData({ list: [] })
      this.getList()
    }
    this.setData({
      isUnfold: false,
      isOk: false,
      curIndex: index,
      chinese: '',
      details: this.data.list[index]
    })
  },
  handleOpen () {
    this.setData({
      isUnfold: true,
      isError: false,
      errorMsg: '',
      isOk: true
    })
  },
  onPullDownRefresh () {
    wx.stopPullDownRefresh()
  },
  onReachBottom () {
  }
})
export {}

