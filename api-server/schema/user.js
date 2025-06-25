const Joi = require('joi');

// 定义 用户名 和 密码 的验证规则
const username = Joi.string().alphanum().min(1).max(10).required();
const password = Joi.string()
  .pattern(/^(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,12}$/)
  .required();
const id = Joi.number().integer().min(1).required();
// 说明：必须是 >= 1 的整数

const nickname = Joi.string().trim().min(1).required();
// 说明：必须是非空字符串，trim() 去除空格，min(1) 确保长度大于0

const email = Joi.string().email().required();
// 注册和登录表单的验证规则对象
exports.reg_login_schema = {
    body: {
        username,
        password,
       
    }
}

exports.update_schema = {
    body: {
        nickname,
        email,
        id,
    }
}

exports.update_pwd_schema ={
  body:{
    oldPwd:password,
    newPwd:Joi.not(Joi.ref('oldPwd')).concat(password)
  }
}
