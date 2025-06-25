const db = require('../db/index.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../token/config')
//定义SQL语句
const sql = `select * from ev_users where username=?`



exports.reguser = (req, res) => {
    const userinfo = req.body
    const sql = `select * from ev_users where username=?`

    // if (!userinfo.username || !userinfo.password) {
    //     // return res.send({
    //     //     status: 1,
    //     //     msg: "用户名或密码不合法"
    //     // })
    //     return res.cc('用户名或密码不合法')
    // }

    //执行SQL语句判定用户名是否被占用
    db.query(sql, [userinfo.username],(err,result)=>{
        if(err){
            // return res.send({
            //     status: 1,
            //     msg: err.message
            // })
            return res.cc(err)
        }
      if(result.length > 0){
        // return res.send({
        //     status: 1,
        //     msg: "用户名被占用"
        // })
        return res.cc('用户名被占用')
      }
      //注册用户
      const sql = `insert into ev_users set ?`
      const password = bcrypt.hashSync(userinfo.password, 10)
      db.query(sql, {username: userinfo.username, password:password},(err,result)=>{
        if(err){
            // return res.send({
            //     status: 1,
            //     msg: err.message
            // })
            return res.cc(err)
        }
        if(result.affectedRows !== 1){
            // return res.send({
            //     status: 1,
            //     msg: "注册用户失败"
            // })
            return res.cc('注册用户失败')
        }
        // res.send({
        //     status: 0,
        //     msg: "注册成功",
        //     data: userinfo
        // })
        res.cc('注册成功',0)
      })
    })



    // res.send({
    //     status: 0,
    //     msg: "注册成功",
    //     data: userinfo
    // })
}
exports.login = (req, res) => {
    const userinfo = req.body
    const sql = `select * from ev_users where username=?`
    db.query(sql, [userinfo.username], (err, result) => {
        if (err) {
            return res.cc(err)
        }
        if (result.length !== 1) {
            return res.cc('登录失败')
        }
        const compareResult = bcrypt.compareSync(userinfo.password, result[0].password)
        if (!compareResult ) {
            return res.cc('登录失败')
        }
        //生成token字符串
        const user = {...result[0],password:'',user_pic:''}
        const tokenStr = jwt.sign(user, config.jwtSecretKey, {expiresIn: config.expiresIn})

        res.send({
            status: 0,
            msg: '登录成功',
            token: 'Bearer '+tokenStr
        })
         
    })
}