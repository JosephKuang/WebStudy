var express = require('express');
var router = express.Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync(__dirname+ '/../data/db.json')
const db = low(adapter)

/* GET home page. */
router.get('/account', function (req, res, next) {
  const account = db.get('account').value();
  console.log(account)

  res.render('../views/list.ejs',{
    account:account
  })
});


router.get('/account/create', function (req, res, next) {
  res.render('create')
});

router.post('/account', (req, res) => {
  res.render('notion',{msg:'添加成功',url:'/account'})
  db.get('account')
  .unshift(req.body)
  .write()
})

module.exports = router;
