var express = require('express');
var router = express.Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const User = require('../module/User')
const { DateTime } = require('luxon');

const adapter = new FileSync(__dirname + '/../data/db.json')
const db = low(adapter)

/* GET home page. */
router.get('/account', async function (req, res, next) {
  try {
    const result = await User.find().sort({time:-1});  // 等待查询完成
    // console.log(result);

    res.render('list.ejs',{ account: result ,datetime: DateTime});  // 把数据传给模板渲染
  } catch (err) {
    console.error('查询失败:', err);
    res.status(500).send('服务器错误');
  }
});



router.get('/account/create', function (req, res, next) {
  res.render('create')
});

router.post('/account', async (req, res) => {
  try {
    await User.create(req.body)
    res.render('notion', { msg: '添加成功', url: '/account' })
  } catch (err) {
    console.log(err)
  }
})

router.get('/account/:id', async (req, res) => { 
  try {
    let id = req.params.id
    await User.deleteOne({ _id: id })
    res.render('notion', { msg: '删除成功', url: '/account' })
    
  }catch (err) {
    console.log(err)
  }
})

module.exports = router;
