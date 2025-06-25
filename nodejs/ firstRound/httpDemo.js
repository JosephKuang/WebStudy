const http = require('http');
const path = require('path');
const fs = require('fs');
const server = http.createServer()
server.on('request', (req, res) => {
    // console.log("sb vist me")
    const url = req.url
    const fpath = path.join(__dirname, url)
    console.log(fpath)
    fs.readFile(fpath, 'utf8', (err, data) => {
        if (err) {
            console.error("读取失败" + err.message);
            return;
        }
        console.log("读取成功" );
        res.setHeader("Contenst-Type", "text/html;charset=utf-8")
        res.end(data)
    })

    
    let content = '<h1>404</h1>' 
    res.setHeader("Content-Type", "text/html;charset=utf-8")
    // res.end(content)

})
server.listen(8080, () => {
    // console.log("server is listening at 8080")

})
