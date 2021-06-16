import request from '../utils/request'

/**
 * 翻译接口
 */
const fanyi = (params: any) => {
  return request.get('https://openapi.youdao.com/api', params)
}

export {
  fanyi
}
