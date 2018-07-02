module.exports = { 
    rootAllowed: 'C:/work/JY',    // 需要同步的代码目录
    remoteDir:'/home/dashao/FuckWork/async/',      // 对应的远程服务器目录
    host: '218.19.114.148',                   // 远程服务器地址
    port: 7746,                            // 和远程服务器配置一致的端口
    pattern: '**',                         // 同步的文件类型（**表示所有类型）
    password: 'qianmeng520',                     // 填写密码
    pollingInterval: 800        
  }
