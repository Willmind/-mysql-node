var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'user'

});

connection.connect();

//查
var sql='SELECT * FROM user'

//增
var addSql='INSERT INTO user(id,name,age,job,phone,email) VALUES(0,?,?,?,?,?)'
var addSqlParams=['tanzhijin','21','前端','13125396635','@126']

//改
var modSql='UPDATE user SET name =?,age=? WHERE id=?'
var modSqlParams =['哈哈哈哈','18',0]

//删
var delSql='DELETE FROM user where id=1'


connection.query(delSql,function (err, result) {
    if (err) {
        console.log('查找失败');
        return
    }
    console.log(result);

})

connection.end();


