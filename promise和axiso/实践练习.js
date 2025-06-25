const fs = require('fs');
const util = require('util');

let readFile = util.promisify(fs.readFile);
readFile('./text.txt').then(data=>{
    console.log(data.toString());
}, err=>{
    console.log("err");
})