import * as _ from 'underscore'

App({
  async onLaunch () {
    wx.cloud.init({
      env: 'mibear-example-015131'
    })
    // 小程序更新提示用户重启
    const updateManager = wx.getUpdateManager()
    if (updateManager) {
      // 请求完新版本信息的回调
      updateManager.onCheckForUpdate(function () {})
      // 下载成功后回调
      updateManager.onUpdateReady(function () {
        wx.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: function (res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate()
            }
            updateManager.applyUpdate()
          }
        })
      })
      // 新版本下载失败
      updateManager.onUpdateFailed(function () {})
    }
  },
  globalData: <CWX.globalData>{}
})
export {}