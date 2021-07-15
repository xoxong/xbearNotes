import * as _ from 'underscore';
import api from '../../api/index'
const CryptoJS = require("crypto-js");
const db = wx.cloud.database()
const db_word = db.collection('word')

Page({
  data:<any> {
    isClose: false,
    isZh: false,
    details: {},
    zhList: [],
    value: 'mount'
  },
  onLoad () {
    this.onSearch()
  },
  handleItem (e: CEvent.datasetAny) {
    const value = e.currentTarget.dataset.item.replace(/[^a-zA-Z]/g,'')
    this.setData({ value })
    this.onSearch()
  },
  onChange (e: CEvent.datasetAny) {
    this.setData({
      value: e.detail.toLowerCase(),
      isClose: e.detail.toLowerCase().length > 0
    })
  },
  onSearch: _.debounce(function (this: any) {
    api.word.details(this.data.value).then(res => {
      let details = res.data
      details.tags2 = details.tags.join('/')
      if (details) {
        this.setData({ details })
        return
      }
    }).catch(() => { this.handleSearch(this.data.value) })
  }, 300),
  handleSearch(v: string) {
    const pattern = new RegExp("[\u4E00-\u9FA5]+");
    let isZh = !!pattern.test(v)
    const time = Math.round(new Date().getTime()/1000);
    const salt = (new Date).getTime();
    api.fanyi.fanyi({
      q: v,
      appKey: '5878e6dcc56449a0',
      salt: salt,
      from: 'en',
      to: 'zh-CHS',
      signType: 'v3',
      curtime: time,
      sign: CryptoJS.SHA256(`5878e6dcc56449a0${v}${salt}${time}kClbKAwTbQXmkA58WKA7d6yp4sFy0XTU`).toString(CryptoJS.enc.Hex)
    }).then((res: any) => {
      const data = res.data
      if (!data.basic) {
        this.setData({ isZh: false, zhList: [] })
        return
      }
      const explains = data.basic && data.basic.explains
      if (isZh && explains) {
        this.setData({ isZh, zhList:explains })
        return
      }
      // 正确词语
      if (data.basic) {
        const details = {
          _id: v,
          key: v,
          tags: data.basic.exam_type, //标签
          tags2: data.basic.exam_type && data.basic.exam_type.join(' / '), //标签
          explains: data.basic.explains.map((v: any) => {
            return {
              t: v.split('. ')[0] + '.',
              n: v.split('. ')[1],
            }
          }), //解释
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
        }
        let db_data: any = { ...details }
        delete db_data['tags2']
        db_word.add({
          data: db_data,
          success: function() {}, fail () {}
        })
        return
      }
    })
  },
  handleClose () {
    this.setData({
      value: '',
      isClose: false
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

