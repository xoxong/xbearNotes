"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import request from '../../utils/request'
// const _ = require('underscore')
// import api from '../../api/index'
// import * as gUtil from '../../utils/util'
// import {  } from '../../constant/images'
// const app = getApp()
var db = wx.cloud.database();
var db_word = db.collection('word');
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
    data: {
        lenovoValue: '',
        isEdit: false
    },
    observers: {
        'details': function () {
            this.setData({ lenovoValue: '' });
        }
    },
    // 组件完全初始化完毕
    attached: function () {
    },
    methods: {
        handleEdit: function () {
            this.setData({ isEdit: true });
        },
        onLenovoChange: function (e) {
            this.setData({ lenovoValue: e.detail });
        },
        handleAdd: function () {
            var _this = this;
            var v = this.data.lenovoValue.trim();
            db_word.doc(this.data.details._id).update({
                data: { memory: v }
            }).then(function () {
                _this.setData({
                    isEdit: false,
                    'details.memory': v
                });
            });
        },
        handleEditMemory: function () {
            this.setData({
                isEdit: true,
                lenovoValue: this.data.details.memory
            });
        },
    }
});
