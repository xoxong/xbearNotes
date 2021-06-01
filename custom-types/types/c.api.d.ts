declare namespace CApi {
  /**
   * 用户openid
   */
  export interface openId {
    /**
     * 用户openid
     */
    openid: string
  }

  /**
   * 评论 / 问答 id
   */
  export interface commentId {
    /**
     * 评论 / 问答 id
     */
    commentId: string
  }

  /**
   * 经纬度
   */
  export interface location {
    /**
     * 纬度
     */
    latitude: string | number,
    /**
     * 经度
     */
    longitude: string | number
  }

  /**
   * 分页参数
   */
  export interface page {
    /**
     * 每一页数据长度
     */
    limit: number,
    /**
     * 请求页码
     */
    page: number
  }
  /**
   * 城市id
   */
  export interface cityId {
    /**
     * 城市id
     */
    cityId: string | number
  }

  /**
   * ugc模块
   */
  namespace ugc {
    /**
     * 获取评论回复列表
     */
    interface getReplyList extends page, openId, commentId {}
    /**
     * 问答是否收藏
     */
    interface getQuestionIsSubscribe extends openId, commentId {}
    /**
     * 设置问答收藏接口
     */
    interface setQuestionSubscribe extends openId, commentId {
      /**
       * 0 取消收藏 1收藏
       */
      status: number
    }
    /**
     * 评论点赞
     */
    interface setCommentThumbs extends setQuestionSubscribe {}
    /**
     * 评论举报接口
     */
    interface tipOffComment extends openId, commentId {
      /**
       * 举报类型
       */
      type: string
    }
    /**
     * 评论信息提交接口
     */
    interface postCommentInfo extends openId {
      /**
       * 文章/学校id/话题id
       */
      objectId: string,
      /**
       * 评论内容
       */
      content: string,
      /**
       * 回复评论id 发布留言则为空
       */
      replyCommentId?: string
      /**
       * 内容类型 0 文章 1 学校 2话题
       */
      contentType: number
    }
    /**
     * 推送打开记录接口
     */
    interface postSendRecordId {
      /**
       * 问答id
       */
      sendRecordId: string
    }
    /**
     * 邀请回答
     */
    interface commentInviteAnswers extends openId, commentId{
      inviteOpenid: string
    }
    /**
     * 学校的问答列表
     */
    interface schoolCommentList extends openId {
      /**
       * 文章/问答id/此处为学校id
       */
      objectId: string,
      /**
       * 排序 new 最新留言 hot 精彩留言
       */
      sort: string
    }
  }
  /**
   * 统计相关
   */
  namespace statistics {
    /**
     * 通过urlsource统计来源
     */
    interface urlClickData extends openId {
      /**
       * 来源
       */
      source: string,
      /**
       * scene 场景值
       */
      scene: number,
      /**
       * 部分场景值有appid
       */
      appid?: string
    }
  }
  /**
   * 搜索相关
   */
  namespace search {
    /**
     * 搜索问答数量
     */
    interface searchQuestionNum extends cityId {
       /**
       * 内容
       */
      content: string
    }
    /**
     * 搜索提示语
     */
    interface searchHint extends cityId, page {}
  }
  /**
   * 民办机构查询相关
   */
  namespace private {
    /**
     * 民办机构列表
     */
    interface list extends page {
      /**
       * 名称/许可证号/.举办者
       */
      name?: string
    }
    /**
     * 民办机构详情
     */
    interface details {
      /**
       * 民办机构id
       */
      privateInstitutionsId: string
    }
  }
  /**
   * 还未分类的接口
   */
  namespace main {
    /**
     * 工具栏列表
     */
    interface toolList extends cityId {
      /**
       * 内容
       */
      content: string
    }
  }
  /**
   * 广告
   */
  namespace advert {
    /**
     * 根据渠道获取广告
     */
    interface getAdvert extends openId, cityId {
      /**
       * 渠道 1 小程序文章 2小程序首页 3商城 4 官网 5 学校
       */
      channelId: string
      /**
       * 阶段id
       */
      stageId: string
    }
    /**
     * 广告点击接口
     */
    interface clickAdvert extends openId, cityId {
      /**
       * 广告id
       */
      advertisementId: string
    }
    /**
     * 获取广告详情
     */
    interface details {
      /**
       * 广告id
       */
      advertisementId: string
    }
  }
  /**
   * 学校相关
   */
  namespace school {
    interface schoolId {
      /**
       * 学校id
       */
      schoolId: string
    }
    /**
     * 学校详情
     */
    interface details extends openId, location, schoolId {}
    /**
     * 附近学校
     */
    interface nearbySchool extends schoolId, page {
      /**
       * 最大距离（KM） 不填默认2 非必填
       */
      maxNum: number
    }
    /**
     * 学校是否收藏
     */
    interface isSubscribe extends openId, schoolId {}
    /**
     * 学校相关文章
     */
    interface getArticles extends page, schoolId {}
    /**
     * 设置学校收藏
     */
    interface subscribe extends openId, schoolId {
      /**
       * 收藏状态 1收藏 0 取消
       */
      status: number
    }
    /**
     * 根据学校学段查询二级数据
     */
    interface segmentGradeData extends cityId {
      segmentGradeId: number
    }
    /**
     * 获取学校招生简章
     */
    interface schoolEnInfo extends schoolId {}
  }
  /**
   * 直播
   */
  namespace live {
    /**
     * 直播列表
     */
    interface list extends page, cityId {}
    /**
     * 商品列表
     */
    interface getGoodsList extends page, location {
      /**
       * 直播信息id
       */
      wechatLiveInfoId: string
    }
    /**
     * 直播详情
     */
    interface liveDetails {
      /**
       * 直播信息id
       */
      wechatLiveInfoId: string
    }
    /**
     * 是否想看
     */
    interface isWant extends openId {
      /**
       * 类型 0 城市想看 1 学校想看
       */
      type: 0 | 1,
      /**
       * 对应id 城市id或学校id
       */
      objectId: string
    }
    /**
     * 最火直播
     */
    interface liveHot extends cityId {}
    /**
     * 浏览记录
     */
    interface liveBrowse extends openId {
      /**
       * 微信直播间id
       */
      wechatLiveInfoId: string,
      /**
       * 列表进入/分享进入
       */
      type?: '列表' | '分享'
    }
  }
  /**
   * 文章
   */
  namespace article {
    /**
     * 文章id
     */
    interface articleId {
      articleId: string
    }
    /**
     * 文章详情
     */
    interface details extends openId, location, articleId {}
    /**
     * 文章点赞
     */
    interface thumbsUp extends openId, articleId {
      /**
       * 点赞状态
       */
      status: 0 | 1
    }
  }
}
