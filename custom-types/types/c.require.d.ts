// 公共require返回参数类型
declare namespace CRequire {
  export interface res {
    data: {
      data: {
        current?: number,
        pages?: number,
        size?: number,
        total?: number,
        records?: any,
        [name: string]: any
      },
      count: number,
      message: string,
      success: boolean
    }
  }
  export interface resArr {
    data: {
      data: [],
    }
  }
  export interface resMall {
    data: {
      current: number,
      pages: number,
      data: Object,
      records: [],
      searchCount: boolean,
      size: number,
      total: number,
      [name: string]: any
    }
  }
}
