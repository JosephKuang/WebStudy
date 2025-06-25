const express = require('express')
const UserInfo_Handler = require('../router_handler/userinfo.js')
const router = express.Router()

const expressJoi = require('../schema/wm.js')
//导入需要的验证规则对象
const { update_schema,update_pwd_schema } = require('../schema/user.js')


router.get('/userinfo',UserInfo_Handler.getUserInfo)

router.post('/userinfo',expressJoi(update_schema),UserInfo_Handler.updateUserInfo)

router.post('/updatepwd',expressJoi(update_pwd_schema),UserInfo_Handler.updatepwd)






module.exports = router