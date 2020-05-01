// const testApi = require('./api/serverTestApi');
// const fs = require('fs');
// const path = require('path');
// const bodyParser = require('body-parser');
// const express = require('express');
// const app = express();

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

// //后端api路由
// app.use('/testApi/user', testApi);

// //监听端口
// app.listen(3000);
// console.log('success listen at port: 3000');
// node 后端服务器

const userApi = require('./api/serverTestApi.js');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 后端api路由
app.use('/testApi/user', userApi);

// 监听端口
app.listen(3000);
app.get('/hello',function(req, res) {
  res.send('hello')
})
console.log('success listen at port:3000......');