
const db = wx.cloud.database()
const w = db.command
const db_word = db.collection('word')

/**
 * 总单词长度
 * @param type plan 陌生词长度
 */
const count = (type: string) => {
  if (type === 'plan') return db_word.where({
    memory: w.and(w.exists(false))
  }).count()
  return db_word.count()
}

/**
 * 已有记忆单词长度
 */
 const memoryCount = () => {
  return db_word.where({
    memory: w.and(w.exists(true), w.neq(''))
  }).count()
}

/**
 * 记忆单词list
 */
 const memoryList = (size: number) => {
  return db_word.where({
    memory: w.and(w.exists(true), w.neq(''))
  }).skip(size).limit(20).get()
}

/**
 * 单词详情
 */
const details = (value: string) => {
  return db_word.doc(value).get()
}

/**
 * 随机单词
 * 默认全部随机，plan随机陌生词
 */
const random = (num: number, type: any) => {
  if (type === 'plan') return db_word.where({
    memory: w.exists(false)
  }).skip(num).limit(1).get()
  return db_word.skip(num).limit(1).get()
}

export {
  count,
  memoryCount,
  memoryList,
  details,
  random
}
