const db =require('../db/index.js')
const bcrypt = require('bcryptjs')



exports.getUserInfo = (req,res)=>{
    // res.send('getUserInfo OK')
    // res.send(req.user)
    const sqlStr = 'select id,username,nickname,email,user_pic from ev_users where id=?'

    db.query(sqlStr,req.user.id,(err,results)=>{
        if(err){
            return res.cc(err)
        }
        if(results.length !== 1){
            return res.cc('获取用户信息失败')
        }
        res.send({
            status: 0,
            message: '获取用户信息成功',
            data: results[0]
        })

    })
}


//  更新用户信息
exports.updateUserInfo = (req, res) => {
    const sqlStr = 'update ev_users set ? where id=?'
    db.query(sqlStr,[req.body, req.body.id],(err,results)=>{
        if(err){
            return res.cc(err)
        }
        if(results.affectedRows !== 1){
            return res.cc('更新用户信息失败')
        }
        return res.cc('更新用户信息成功',0)
    })
}

//修改密码
exports.updatepwd = (req,res)=>{
    // res.send('updatepwd OK')
    const sqlStr = 'select * from ev_users where id=?'

    db.query(sqlStr,req.user.id,(err,results)=>{ 
        if(err){
            return res.cc(err)
        }
        if(results.length!== 1){
            return res.cc('获取用户信息失败')
        }
        // 判断提交的旧密码是否正确
        const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password)
        if(!compareResult){
            return res.cc('旧密码错误！')
        }
        // 定义更新密码的 SQL 语句
        const sql = 'update ev_users set password=? where id=?'
        // 对新密码进行 bcrypt 加密
        const newPwd = bcrypt.hashSync(req.body.newPwd, 10)
        // 执行 SQL 语句，更新密码
        db.query(sql, [newPwd, req.user.id], (err, results) => {
            // SQL 语句执行失败
            if (err) return res.cc(err)
            // 影响行数不为 1
            if (results.affectedRows !== 1) return res.cc('更新密码失败！')
            // 更新密码成功
            return res.cc('更新密码成功！', 0)
        }) 
    })
}