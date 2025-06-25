const express = require('express')
const router = require('./Router')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use('/api',router)

router.get('/get', (req, res) => {
    const query = req.query
    res.send({
        status: 200,
        msg: '请求成功',
        data: query
    })
})

router.post('/post', (req, res) => {
    const body = req.body
    res.send({
        status: 0,
        msg: '请求成功',
        data: body
    })

})













app.listen(8080, () => {
    console.log('服务器启动成功')

})