declare namespace CWX {
  // any参数
  export interface globalData {
    /**
     * 第一次打开小程序
     */
    isOpenMini: boolean,
    /**
     * 用户openId
     */
    openId: string;
    /**
     * 用户unionid
     */
    unionid: string;
    /**
     * 微信用户信息
     */
    userInfo: any;
    /**
     * 用户孩子信息
     */
    userChildInfo: any;
    /**
     * 用户手动选择的下拉城市项, 首次进入默认经纬度城市
     */
    userSelectCity: any;
    /**
     * 用户手动选择的下拉城市项, 首次进入默认经纬度城市
     */
    userSelectStage: any;
    /**
     * 城市列表
     */
    cityList: any;
    /**
     * 阶段列表
     */
    stageSList: any;
    /**
     * 是否有网络
     */
    networkStatus: boolean;
    /**
     * isAuthorize
     */
    isAuthorize: boolean;
    /**
     * 用户授权获取了地理位置
     */
    isGetLocation: boolean,
    /**
     * 是否填写了用户孩子信息
     */
    isUserChildInfo: boolean,
    /**
     * 是否关闭了孩子信息弹窗
     */
    isCloseChildModal: boolean,
    /**
     * 是否关闭了孩子信息顶部提示
     */
    isCloseChildTips: boolean,
    /**
     * 设备信息栏高度
     */
    statusBarHeight: number,
    /**
     * topnav组件高度
     */
    titleBarHeight: number,
    /**
     * 设备tab总高度
     */
    topBarHeight: number,
    /**
     * 苹果底部小黑条的高度
     */
    safeAreaBottomHeight: number,
    /**
     * 是否是iphoneX或则iphone 11 之后的版本有底部操作栏
     */
    isIphoneX: boolean,
    /**
     * 是否分享进入
     */
    isShare: boolean,
    /**
     * 场景值
     */
    scene: number,
    /**
     * 是否从但页面进入,比如朋友圈分享
     */
    isSinglePage: boolean,
    /**
     * 是否是app
     */
    isApp: boolean,
    /**
     * 常用请求参数
     */
    searchParms: {
      latitude: string | number,
      longitude: string | number
    },
    /**
     * 测试配置，用于开发中默认配置
     */
    devConfig: {
      schoolId: string,
      articleId: string,
      thematicId: string
    },
    platformData: any;
    /**
     * 问答id列表,用于学校问答跳转详情的下一个功能
     */
    questionIdList: [],
    /**
     * 首页提问题选中的学校信息
     */
    homeQuestionSchoolList: [],
    /**
     * 首页提问题成功之后的返回结果，用于离线渲染当前数据
     */
    homeQuestionResult?: {},
    /**
     * 商城的数据--------------------
     * 商城的数据--------------------
     * 商城的数据--------------------
     */
    thirdSession?: any,
    wxUser?: any,
    /**
     * 视频详情
     */
    videoContext?: any,
    /**
     * 设置TabBar购物车数量
     */
    shoppingCartCount: string;
  }
}

// 声明合并
declare namespace WechatMiniprogram {
  namespace App {
    interface Constructor {
      /**
       * 诸葛
       */
      zhuge: CEvent.zhugeIO
    }
    interface Option {
      /**
       * api
       */
      /**
       * 获取openId
       * @param isUpdate 是否强制更新
       */
      getOpenId: Function,
      /**
       * 判断是否拉黑名单
       */
      getIsBlacklist: () => void,
      /**
       * 判断是否断网
       */
      networkStatusChange: () => void,
      /**
       * 获取当前网络状态
       */
      getNetworkStatus: () => void,
      /**
       * nps用户调查3分钟弹出
       */
      getNpsStatus: () => void,
      /**
       * 公共数据
       */
      globalData: CWX.globalData,
      /**
       * 商城模块-初始化，供每个页面调用
       */
      initMallPage: () => any,
      /**
       * 商城模块-登录
       */
      doLogin: () => any,
      /**
       * 获取当前页面带参数的url
       */
      getCurrentPageUrlWithArgs: () => any,
       /**
       * 通用数据统计
       */
      generalStatistics: (data: CMApi.generalStatistics) => any
    }
  }
}
