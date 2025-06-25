const express = require('express')
const jwt = require('jsonwebtoken')
// 原来的错误写法：
// const expressJwt = require('express-jwt')

// 正确写法：
const { expressjwt: expressJwt } = require('express-jwt')
const app = express()
app.use(express.json())

const secretKey = 'secret'


// 修正：排除登录路径 + 指定算法
app.use(expressJwt({ secret: secretKey, algorithms: ['HS256'] }).unless({ path: ['/api/login'] }))
app.post('/api/login', (req, res) => {
    const body = req.body

    const tokenStr = jwt.sign({ name: body.name }, secretKey, { expiresIn: '1h' })
    
    res.send({
        status: 200,
        msg: '请求成功',
        token: tokenStr
    })
})

app.post('/admin', (req, res) => {
    console.log(req.auth)
    
    res.send({
        status: 200,
        msg: '请求成功',
        data: req.auth
    })
})


app.use((err, req, res, next)=>{
    if(err.name === 'UnauthorizedError'){
        res.send({
            status: 401,
            msg: '无效的token'
        })
    }
    res.send('未知错误')
})
app.listen(8080, () => {
    console.log('服务器启动成功')
})