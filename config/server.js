const express = require('express')//get, put, delete,psot são os métodos HTTP
const app = express()
const consign = require('consign');

app.set('view engine','ejs')
app.use(express.static('public'))
consign()
  .include('route')
  .into(app);

module.exports = app;