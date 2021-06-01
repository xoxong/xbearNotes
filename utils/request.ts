
import * as _ from 'underscore';
interface ConstructorParms {
  withBaseURL?: boolean,
  baseURL?: string
}

interface RequestParms {
  (url: string, data?: any, type?: string): any;
}

interface RequestFn {
  (method: "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined,
  url: string,
  data: Object,
  type: string,
  conten_type?: string,): Promise<unknown>,
}

class Request {
  withBaseURL?: boolean
  baseURL?: string
  constructor (params: ConstructorParms) {
    this.withBaseURL = params.withBaseURL
    this.baseURL = params.baseURL
  }
  get: RequestParms = (url, data, type) => {
    return this.request('GET', url, data, '', type)
  }
  post: RequestParms = (url, data, type) => {
    return this.request('POST', url, data, "application/json", type)
  }
  put: RequestParms = (url, data, type) => {
    return this.request('PUT', url, data, '', type)
  }
  request: RequestFn = (method, url, data, conten_type) => {
    // const _this = this
    wx.getNetworkType({
      success (res) {
        const isNone = res.networkType !== 'none'
        if (!isNone) {
          setTimeout(() => {
            const pages = getCurrentPages()
            if (pages[pages.length - 1].route === 'pagesSingle/pages/noNetwork/index') return
            wx.navigateTo({
              url: '/pagesSingle/pages/noNetwork/index'
            })
          }, 500);
        }
      }
    })
    return new Promise((resolve, reject) => {
      wx.request({
        // url: _this.baseURL + url,
        url: url,
        data,
        header: {
          'content-type': conten_type
        },
        method,
        dataType: 'json',
        responseType: 'text',
        success (res) {
          // const resData:any = res.data
          // if (resData.code !== 200) return reject(resData.message || '请求失败')
          return resolve(res)
        },
        fail (error) {
          if (!getApp().globalData.networkStatus) {
            wx.showToast({
              title: '网络异常, 请检查网络后重新尝试',
              icon: 'none',
              duration: 2000
            })
          }
          return reject({
            msg: error || '请求失败',
            // url: _this.withBaseURL ? _this.baseURL + url : url,
            url: url,
            method,
            data
          })
        }
      })
    })
  }
}

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

const request = new Request({
  baseURL: '',
  withBaseURL: true
})

export default request