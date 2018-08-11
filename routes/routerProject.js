const express = require('express')
// 依赖dao模块
const dao = require('../models/daoProject')
// 启动路由容器
const router = express.Router()

router.get('/getCharts', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    dao.getAll(function (err, data) {
        if (err) {
            console.error(err);
            res.status(500).send('server error!')
            return
        }

        data = {
            status: 0,
            message: data
        }
        // res.send(`${callback}(${JSON.stringify(data)})`)
        res.json(data)
    })

})

router.post('/send', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    dao.addSay([req.body.name, req.body.say, new Date()], function (err, data) {
        if (err) {
            console.error(err);
            res.status(500).send('server error!')
            return
        }

        data = {
            status: 0,
            message: 'ok'
        }
        // res.send(`${callback}(${JSON.stringify(data)})`)
        res.json(data)

    })
})

router.get('/getNewChart/:id', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    dao.getNewChart([req.params.id], function (err, data) {
        if (err) {
            console.error(err);
            res.status(500).send('server error!')
            return
        }

        data = {
            status: 0,
            message: data
        }
        // res.send(`${callback}(${JSON.stringify(data)})`)
        res.json(data)

    })
})



// 导出路由
module.exports = router