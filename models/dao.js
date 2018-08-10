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
    connection.query('SELECT * FROM car_brand', function (err, data) {
        //查询后执行回调函数
        if (err) {
            callback(err)
            return
        }
        callback(null, data)
    });
}
// 添加
exports.add = function (newItem, callback) {
    // newItem : [xxx,xxx]
    connection.query('INSERT INTO car_brand(name,date) VALUES(?,?)', newItem,
        function (err, data) {
            //查询后执行回调函数
            if (err) {
                callback(err)
                return
            }
            callback(null, data)
        });
}
// 删除
exports.delete = function (id, callback) {
    connection.query('DELETE FROM car_brand WHERE id=?', id,
        function (err, data) {
            //查询后执行回调函数
            if (err) {
                callback(err)
                return
            }
            callback(null, data)
        });
}


//connection.end()