const express = require('express');

const router = require('./routes/router')
const vueRouter = require('./routes/routerProject')

const bodyParser = require('body-parser')
const path = require('path')

const app = express();

// 配置body-parser 处理post请求
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())

// 处理静态资源
app.use(express.static(path.join(__dirname, 'vue-case')))
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))
app.use('/', express.static(path.join(__dirname, 'dist')))

// 配置模板引擎
app.engine('html', require('express-art-template'))
app.set('views', 'dist')

// 路由
app.use(router)
app.use(vueRouter)

const server = app.listen(3000, function () {

    const host = server.address().address
    const port = server.address().port

    console.log('服务器已启动，访问地址为 http://%s:%s', host, port, new Date().toLocaleString())

})