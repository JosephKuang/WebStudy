const user_hander = require('../router_handler/user')
//用户路由模块
const express = require('express')
//创建路由对象
const router = express.Router()

//导入验证数据的中间件
const expressJoi = require('../schema/wm.js')
//导入需要的验证规则对象
const { reg_login_schema } = require('../schema/user')

//注册用户
router.post('/reguser', expressJoi(reg_login_schema),user_hander.reguser)

//用户登录
router.post('/login',expressJoi(reg_login_schema),user_hander.login)
//对外暴露路由对象
module.exports = router
