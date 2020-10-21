var express = require('express')
var app = express()
var path = require('path')

console.log(__dirname)

app.use(express.static(path.join(__dirname, '/build/static/')))

app.listen(3000)
