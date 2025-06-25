const express = require('express')
const mw = require('./Router.js')
const app = express()

// const mmw1 = (req, res, next) => {
//     console.log('这是自定义中间件1')
//     next() 
// }
// const mmw2 = (req, res, next) => {
//     console.log('这是自定义中间件2')
//     next() 
// }
// const mmw3 = (req, res, next) => {
//     console.log('这是自定义中间件3')
//     next() 
// }
// // 全局中间件
// // app.use(mmw1)
// app.use(mmw2)
// app.use(mmw3)

app.use(mw)
// app.use(express.json())
app.get('/user', (req, res) => {
    throw new Error('服务器内部错误')
    res.send('这是用户列表')
})

app.post('/user', (req, res) => {
    // console.log(req.body)

    res.send('这是用户列表')
})

// app.use((err,req, res, next)=>{
    // console.log('这是全局错误处理函数')
    // res.send('err:' + err.message)
// })
app.listen(8080, () => {
    console.log('服务器启动成功')
})