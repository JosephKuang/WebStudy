const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'),

  err => console.log('连接失败'));

//   setTimeout(() => {
//     mongoose.disconnect().then(()=> console.log('Disconnected!'))
//   },2000)