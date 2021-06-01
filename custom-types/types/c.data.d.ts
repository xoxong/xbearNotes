declare namespace CData {
  // any参数
  export interface dataAny {
    [name: string]: any
  }

   // 积分计算题目
  export interface toolsIntegral{
    [name: string]: toolsIntegralList[]
  }
  export interface toolsIntegralList {
    /**
     * 所选城市的区域
     */
    text: string,
    /**
     * 所选区的题目列表
     */
    data: toolsIntegralData[],
    /**
     * 题目匹配数据
     */
    matchData?: toolsIntegralMatchData[],
    /**
     * 最大分数，匹配最终结果分数
     */
    maxScore?: number
  }
  export interface toolsIntegralData {
    /**
     * 大标题
     */
    headline: string,
    /**
     * 小标题，小标题在一个区中必须唯一
     */
    subtitle: string,
    /**
     * 默认选项下标
     */
    defaultIndex?: number,
    /**
     * 是否需要匹配
     * 无法直接得到分数,通过最终匹配得到的数据和matchData对比得到分数
     */
    isMatch?: boolean,
    /**
     * 是否需要判断隐藏条件, 只要满足judgeData任意一项则不展示，匹配的是所有isMatch的数据
     */
    isJudge?: boolean,
    /**
     * 是否需要判断隐藏条件, 只要满足judgeData任意一项则不展示，匹配的每一项单个的数据，非match之后的数据
     */
    isJudgeSingle?: boolean,
    /**
     * 是否需要判断展示条件, 只要满足judgeData任意一项则展示，匹配所有isMatch的数据，不满足不展示
     */
    isJudgeYes?: boolean,
    /**
     * 是否需要判断选项是否展示
     */
    isJudgeItem?: true,
    /**
     * 是否是选择题
     */
    isSelect?: boolean,
    /**
     * 题目类型
     * - 'radio': 单选
     * - 'multi': 多选
     * - 'input': 输入框
     * - 'num': 数字选择器
     * - '_month': 月份选择器，定制化类型
     * - '_monthPick': 月份选择器，多选一，多个月份只计算分数最高的
     */
    topicType: '_radio' | '_multi' | '_input' | '_num' | '_month' | '_monthPick',
    /**
     * 是否不是深圳户口才显示
     */
    isNoShenzhen?: boolean,
    /**
     * 是否是深圳户口才显示
     */
    isShenzhen?: boolean,
    /**
     * 是否需要动态控制后面的题目
     */
    isDynamicOption?: boolean,
    /**
     * 题目选项
     */
    options: toolsIntegralOptions[],
    /**
     * 备注，灰色字体展示下方
     */
    remarks?: string,
    /**
     * 判断条件列表
     */
    judgeData?: string[],
    /**
     * 是否需要合并分数，与某项分数合并
     */
    isMerge?: boolean,
    /**
     * 合并项描述
     */
    mergeData?: {
      /**
       * 合并项subtitle
       * */
      title: string,
      /**
       * 合并之后的最大分数限制
       */
      maxScore?: number
    }
  }

  export interface toolsIntegralOptions {
    /**
     * 题目标题
     */
    title: string,
    /**
     * 如果是月份的类型有标题2，标题1和标题2中间方月份选择器
     */
    title2?: string,
    /**
     * 是否是深圳户口展示
     */
    isShenzhen?: true,
    /**
     * 是否不是深圳户口展示
     */
    isNoShenzhen?: boolean,
    /**
     * 如果是月份则一个月多少分
     */
    singleScore?: number,
    /**
     * 积分最大限度，不能超过该分数
     */
    maxScore?: number,
    /**
     * 如果是月积分，设置最小标准，小于该数据不计算分数
     */
    minMonth?: number,
    /**
     * 题目分数
     */
    score?: number,
    /**
     * 备注，灰色字体展示下方
     */
    remarks?: string,
    /**
     * 是否需要匹配
     * 无法直接得到分有匹配规则
     */
    isMatch?: boolean,
    /**
     * 单个题目的匹配数据
     */
    matchData?: {
      /*
      * 匹配内容
      */
     macth?: string,
     /**
      * 控制的最大分数限制
      */
     maxScore?: number
    },
    /**
     * 是否控制动态选项
     */
    isDynamicOption?: boolean,
    /**
     * 动态控制选项列表
     */
    dynamicOption?: toolsIntegralDynamicOption[]
  }

  export interface toolsIntegralDynamicOption {
    /**
     * 动态控制的选项名称
     */
    title: string,
    /**
     * 动态控制的选项
     */
    options: toolsIntegralOptions[]
  }

  export interface toolsIntegralMatchData {
    /**
     * 内容
     */
    content: string,
    /**
     * 匹配字段
     */
    macth: string,
    /**
     * 分数
     */
    score?: number,
    /**
     * 分类
     */
    class?: string
  }

  /**
   * 字典表
   * - KINDERGARTEN: 学校选项-幼儿园标签
   * - PRIMARY: 学校选项-小学标签
   * - JUNIOR: 学校选项-初中标签
   * - HIGH: 学校选项-高中标签
   * - PARSER_STYLE: 设置parser默认的标签样式
   * - TAG_RATING_NAME: 学校标签学校评级字段ratingName对应
   * - TOOLS_INTEGRAL: 积分计算题目
   * - PROSECUTE_LIST: 举报
   * - ORDER_STATUS: 订单状态
   * - MAP_POI_TYPE: 地图poi类型
   */
  export interface constant {
    TAG_RATING_NAME: any,
    PARSER_STYLE: any[],
    TOOLS_INTEGRAL: toolsIntegral,
    PROSECUTE_LIST: any[],
    ORDER_STATUS: any,
    APP_PATH_MATCH: any[]
    MAP_POI_TYPE: any
  }

  /**
   * 图片表
   */
  export interface gImages{
    SXLOGO: string,
    SEEDUSER: string,
    GOODANSWER: string,
    CLICKME: string,
    REDSTAR: string,
    GRAYTAR: string,
    GOODCOMMENT: string,
    GOODSCHOOL: string
  }
}

