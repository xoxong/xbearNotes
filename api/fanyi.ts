// 还未分类的接口
import request from '../utils/request'

/**
 * 文章详情
 */
const fanyi = (params: any) => {
  return request.get('https://openapi.youdao.com/api', params)
}

export {
  fanyi
}
