var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'vue-demo'
});

// connection.connect();

// 查全部
exports.getAll = function (callback) {
    connection.query('SELECT * FROM chartroom', function (err, data) {
        //查询后执行回调函数
        if (err) {
            callback(err)
            return
        }
        callback(null, data)
    });
}
// 添加消息
exports.addSay = function (arr, callback) {
    connection.query('insert into chartroom(name,say,date) VALUES(?,?,?)', arr, function (err, data) {
        //查询后执行回调函数
        if (err) {
            callback(err)
            return
        }
        callback(null, data)
    });
}

//connection.end()