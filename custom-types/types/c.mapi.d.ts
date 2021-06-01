declare namespace CMApi {
  /**
   * 点击数据记录接口
   */
  export interface generalStatistics {
    /**
     * 相关id
     */
    objectId?: string,
    /**
     * 类型 bannerBrowseHistory banner点击历史 entranceBrowseHistory 首页入口浏览历史 activityBrowseHistory 首页活动浏览历史
     */
    type: 'bannerBrowseHistory' | 'entranceBrowseHistory' | 'activityBrowseHistory' | string,
    /**
     * 城市id
     */
    cityId: string
  }
}
