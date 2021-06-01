const fs = require('fs');
// 获取命令行后面的参数
// @ts-ignore
const envStr = process.argv[process.argv.length - 1]
// @ts-ignore
const cwd = process.cwd()
const appidObj: any = {
  'dev': 'wxa558743b00aa9898'
}
const appid = appidObj[envStr]

// 切换本地环境
const switchEnv = () => {
  let envData = fs.readFileSync(cwd + '/utils/env.ts', 'utf-8');
  envData = envData.replace(/ENV.\S*;/,  `ENV.${envStr};`)
  fs.writeFileSync(cwd + '/utils/env.ts', envData)
  console.log('环境切换完成', envStr)
}

// 修改appid配置文件
const setAppId = () => {
  let configData = fs.readFileSync(cwd + '/project.config.json', 'utf-8');
  configData = configData.replace(/("appid": "\S*",)/,  `"appid": "${appid}",`)
  fs.writeFileSync(cwd + '/project.config.json', configData)
  console.log('appid配置切换完成:', appid)
}

try {
  // 切换本地环境
  switchEnv()
  // 修改appid配置文件
  setAppId()
} catch(e) {
  console.log('读取文件发生错误, 环境切换失败, 请检查“bin/envSwitch”配置文件', e);
}

export {}