const express = require('express')//get, put, delete,psot são os métodos HTTP
const app = express()

app.set('view engine','ejs')
app.use(express.static('public'))

module.exports = app;