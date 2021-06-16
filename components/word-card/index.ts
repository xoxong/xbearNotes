// import request from '../../utils/request'
// const _ = require('underscore')
// import api from '../../api/index'
// import * as gUtil from '../../utils/util'
// import {  } from '../../constant/images'
// const app = getApp()
const db = wx.cloud.database()
const db_word = db.collection('word')

Component({
  options: {
    "styleIsolation": "apply-shared"
  },
  properties: {
    details: {
      type: Object,
      value: {}
    }
  },
  data:<any> {
    lenovoValue: '',
    isEdit: false
  },
  observers: {
    'details': function () {
      this.setData({ lenovoValue: '' })
    }
  },
  // 组件完全初始化完毕
  attached: function () {
  },
  methods: {
    handleEdit () {
      this.setData({ isEdit: true })
    },
    onLenovoChange (e: CEvent.datasetAny) {
      this.setData({ lenovoValue: e.detail })
    },
    handleAdd () {
      const v = this.data.lenovoValue.trim()
      db_word.doc(this.data.details._id).update({
        data: { memory: v }
      }).then(() => {
        this.setData({
          isEdit: false,
          'details.memory': v
        })
      })
    },
    handleEditMemory () {
      this.setData({
        isEdit: true,
        lenovoValue: this.data.details.memory
      })
    },
  }
})

export {}