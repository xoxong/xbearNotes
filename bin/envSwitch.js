"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
// 获取命令行后面的参数
// @ts-ignore
var envStr = process.argv[process.argv.length - 1];
// @ts-ignore
var cwd = process.cwd();
var appidObj = {
    'dev': 'wxa558743b00aa9898'
};
var appid = appidObj[envStr];
// 切换本地环境
var switchEnv = function () {
    var envData = fs.readFileSync(cwd + '/utils/env.ts', 'utf-8');
    envData = envData.replace(/ENV.\S*;/, "ENV." + envStr + ";");
    fs.writeFileSync(cwd + '/utils/env.ts', envData);
    console.log('环境切换完成', envStr);
};
// 修改appid配置文件
var setAppId = function () {
    var configData = fs.readFileSync(cwd + '/project.config.json', 'utf-8');
    configData = configData.replace(/("appid": "\S*",)/, "\"appid\": \"" + appid + "\",");
    fs.writeFileSync(cwd + '/project.config.json', configData);
    console.log('appid配置切换完成:', appid);
};
try {
    // 切换本地环境
    switchEnv();
    // 修改appid配置文件
    setAppId();
}
catch (e) {
    console.log('读取文件发生错误, 环境切换失败, 请检查“bin/envSwitch”配置文件', e);
}
