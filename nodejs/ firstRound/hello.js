const fs = require('fs');
const path = require('path');
fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("读取失败" + err.message);
        return;
    }
    console.log("读取成功" + data);
    const arr = data.split(' ')
    console.log(arr)
    const arrnew = []
        let i = 1

    arr.forEach(item=>{
        arrnew.push(i +"." + item.replace('=',":"))
        i++;
    })
    console.log(arrnew)
   const str = arrnew.join('\n')
   console.log(str)
   console.log(__dirname)
    fs.writeFile(path.join(__dirname,'hello.txt'), str, 'utf8', (err) => {
        if (err) {
            console.error("写入失败" + err.message);
            return;
        }
    })

});
const path1 =  path.join(__dirname,'hello.txt')
console.log(path.basename(path1))