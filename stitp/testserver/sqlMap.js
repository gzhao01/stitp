// var sqlMap = {
//   user: {
//     add: 'insert into user(name,age) values(?,?)'
//   }
// }

// module.exports = sqlMap;

// sql语句
var sqlMap = {
  // 用户
  user: {
      add: 'insert into user(id, name, age) values (1, ?, ?)'
  }
}
  
module.exports = sqlMap;