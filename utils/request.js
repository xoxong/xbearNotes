"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Request = /** @class */ (function () {
    function Request(params) {
        var _this = this;
        this.get = function (url, data, type) {
            return _this.request('GET', url, data, '', type);
        };
        this.post = function (url, data, type) {
            return _this.request('POST', url, data, "application/json", type);
        };
        this.put = function (url, data, type) {
            return _this.request('PUT', url, data, '', type);
        };
        this.request = function (method, url, data, conten_type) {
            // const _this = this
            wx.getNetworkType({
                success: function (res) {
                    var isNone = res.networkType !== 'none';
                    if (!isNone) {
                        setTimeout(function () {
                            var pages = getCurrentPages();
                            if (pages[pages.length - 1].route === 'pagesSingle/pages/noNetwork/index')
                                return;
                            wx.navigateTo({
                                url: '/pagesSingle/pages/noNetwork/index'
                            });
                        }, 500);
                    }
                }
            });
            return new Promise(function (resolve, reject) {
                wx.request({
                    // url: _this.baseURL + url,
                    url: url,
                    data: data,
                    header: {
                        'content-type': conten_type
                    },
                    method: method,
                    dataType: 'json',
                    responseType: 'text',
                    success: function (res) {
                        // const resData:any = res.data
                        // if (resData.code !== 200) return reject(resData.message || '请求失败')
                        return resolve(res);
                    },
                    fail: function (error) {
                        if (!getApp().globalData.networkStatus) {
                            wx.showToast({
                                title: '网络异常, 请检查网络后重新尝试',
                                icon: 'none',
                                duration: 2000
                            });
                        }
                        return reject({
                            msg: error || '请求失败',
                            // url: _this.withBaseURL ? _this.baseURL + url : url,
                            url: url,
                            method: method,
                            data: data
                        });
                    }
                });
            });
        };
        this.withBaseURL = params.withBaseURL;
        this.baseURL = params.baseURL;
    }
    return Request;
}());
// function getSignature (url: string, data: any, method: any) {
//   let res = []
//   const origin = '021705'
//   // const nonce = utils.randomString(32).toLocaleUpperCase()
//   const nonce = ''
//   const path = '/api/' + url
//   let query: any = []
//   let body = ''
//   if (method === 'GET') {
//     _.map(data, (v: string, k: string) => {
//       query.push(`${k}=${v}`)
//     })
//   } else {
//     body = JSON.stringify(data)
//   }
//   const timestamp = new Date().getTime()
//   res.push(origin, nonce, path, query.join('&'), body, timestamp)
//   const signature = CryptoJS.enc.Utf8.parse(res.join(';'))
//   const key = CryptoJS.enc.Utf8.parse('2b48a2f35352a4d87d51d6dd03bb874e')
//   const iv = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(nonce).toString().substring(8, 24))
//   const encrypted = CryptoJS.AES.encrypt(signature, key, {
//     iv: iv,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7
//   }).toString()
//   return {
//     origin,
//     nonce,
//     signature: encrypted
//   }
// }
var request = new Request({
    baseURL: '',
    withBaseURL: true
});
exports.default = request;
