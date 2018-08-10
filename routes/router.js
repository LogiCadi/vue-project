const express = require('express')
// 导入dao模块
const dao = require('../models/dao')
// 启动路由容器
const router = express.Router()

router.get('/getList', function (req, res) {
    // 获取jsonp的callback方法名
    var callback = req.query.callback

    dao.getAll(function (err, data) {
        if (err) {
            console.error(err);
            res.status(500).send('server error!')
            return
        }

        data = {
            code: 0,
            msg: '',
            data: data
        }
        // res.send(`${callback}(${JSON.stringify(data)})`)
        res.json(data)
    })

})
router.post('/add', function (req, res) {

    dao.add([req.body.name, new Date()], function (err, data) {
        if (err) {
            console.log(err.message);
            res.status(500).send('server error!')
            return
        }
        data = {
            code: 0,
            msg: '',
            data: ''
        }
        res.json(data)
    })
})

router.post('/delete', function (req, res) {

    dao.delete([req.body.id], function (err, data) {
        if (err) {
            console.log(err.message);
            res.status(500).send('server error!')
            return
        }
        data = {
            code: 0,
            msg: '',
            data: ''
        }
        res.json(data)
    })
})


// 导出路由
module.exports = router