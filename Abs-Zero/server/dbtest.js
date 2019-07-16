const db = require('./db');
var admin = new db.User({
  name: 'zero',
  password: '1314520',
  nickName: '绝对零度',
  avatar: null,
  // type: req.body.type
  type: 1
});
admin.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('succeed')
  }
});
