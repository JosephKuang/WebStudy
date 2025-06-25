const express = require('express');
const db = require('./db/index.js');
const cors = require('cors');
const userRouter = require('./router/user');
const joi = require('joi');
const expressJWT  = require('express-jwt');
const config = require('./token/config');
const userInfoRouter = require('./router/userinfo.js');


const app = express();
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// 响应数据的中间件
app.use((req,res,next)=>{
     res.cc = function(err, status = 1){
         res.send({
             status,
             message: err instanceof Error ? err.message : err
         })
     }
     next()
})

app.use(expressJWT({secret: config.jwtSecretKey, algorithms: ['HS256']}).unless({ path: [/^\/api/] }))

app.use('/api', userRouter);
app.use('/my', userInfoRouter);


app.use((err, req, res, next) => {
    if (err instanceof joi.ValidationError) {
        return res.cc(err);
    }

    if (err.name === 'UnauthorizedError') {
        return res.cc('身份认证失败！');
    }
    // 处理其他未知错误
    res.cc(err);


});





app.listen(8080, ()=>{
    console.log("api server is running at http://localhost:8080")
})