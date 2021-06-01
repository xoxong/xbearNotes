declare namespace CEvent {
  /**
   * 全number类型参数
   */
  export interface allNumber {
    [name: string]: number
  }
  /**
   * 原始事件回调自定义属性
   */
  export interface datasetAny {
    currentTarget: {
      dataset: {
        item?: any,
        clicktype?: string,
        [name: string]: any
      }
    },
    detail: {
      [name: string]: any
    },
    target: {
      dataset: {
        [name: string]: any
      }
    }
  }

   /**
   * 诸葛io
   */
  export interface zhugeIO {
    load: any,
    /**
     * 记录用户行为
     * - 'eventName': 事件名称,
     * - 'list': 属性列表
     */
    track: (eventName: string, list?: object) => void,
    /**
     * 绑定用户信息
     */
    identify: any,
    /**
     * 记录收入数据采集
     */
    trackRevenue: any

  }

  /**
  * 点击次数统计
  * 'type': 类型说明
  * - 'clickIndex': 首页
  * - 'clickDiscover': 发现
  * - 'clickRecommend': 推荐
  * - 'clickSchool': 学校
  * - 'clickBrochure': 招生简章
  * - 'clickMy': 我的
  * - 'clickDiscount': 2折团课
  * - 'clickCollection': 我的收藏
  * - 'clickAbout': 关于上哪学
  * - 'clickInformation': 孩子信息
  * - 'clickCalendar': 升学日历
  * - 'clickIntegrationTool': 深圳积分工具
  * - 'clickLiveTop': 直播顶部入口
  * - 'clickLiveTab': 直播标签页入口
  * - 'clickLiveHot': 直播最热入口
 */
export interface requestPageClick {
  ( type: 'clickIndex' |
    'clickDiscover' |
    'clickRecommend' |
    'clickSchool' |
    'clickBrochure' |
    'clickMy' |
    'clickDiscount' |
    'clickCollection' |
    'clickAbout' |
    'clickInformation' |
    'clickCalendar' |
    'clickIntegrationTool' |
    'clickQuestion' |
    'clickGoodLessons' |
    'clickLiveTop' |
    'clickLiveTab' |
    'clickLiveHot'
  ): void
}
  /**
   * 全局请求
   * - 'requestAddUserInfo': 提交/修改用户信息(微信用户信息)
   * - 'requestPageClick': 点击次数统计
   * - 'requestShareClick': 分享历史接口, 统计文章学校主题的分享次数
   * - 'getUserLocation': 获取用户地理位置并存app
   * - 'getCity': 获取城市列表
   * - 'getUserCity': 经纬度转换城市
   * - 'setLocalCityInfo': '存储城市信息到本地'
   * - 'getUserStages': 获取用户阶段
   * - 'getStagesTree': 获取阶段树，整个阶段标签
   * - 'getUserChildInfo': 获取用户孩子信息
   * - 'setUserChildInfo': 提交孩子信息
   * - 'basicsInit': 基本数据初始化，默认加载孩子信息，地理位置，当前城市
   */
  export interface gRequest {
    requestAddUserInfo: (userInfo?: object) => void,
    requestPageClick: requestPageClick,
    requestShareClick: Function,
    getUserLocation: Function,
    getCity: Function,
    getUserCity: Function,
    setLocalCityInfo: Function,
    getUserStages: Function,
    getStagesTree: Function,
    getUserChildInfo: Function,
    setUserChildInfo: Function,
    basicsInit: (isLocation?: boolean, isUpdateAddress?: boolean) => {}
  }
  /**
   * 工具函数
   * - deepCopy: 数据拷贝
   * - trim: 去除收尾空格
   * - formatDistance: 距离转换
   * - toThousandsMillion: 数量转换，转换千，万
   * - toMillion: 数量转换，转换万
   * - formatTimeTodayYesterday 文章时间转换，今天、昨天、年月日
   * - formatHtml 文章html处理
   */
  export interface gUtil {
    deepCopy: Function,
    trim: Function,
    formatDistance: Function,
    toThousandsMillion: Function,
    toMillion: Function,
    formatTimeTodayYesterday: Function,
    formatHtml: Function
  }
}


