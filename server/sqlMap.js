// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into user(id, username, password) values (0, ?, ?)',
    select_name:"select * from user",
  }
}

module.exports = sqlMap;
