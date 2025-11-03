const express = require('express')//get, put, delete,psot são os métodos HTTP
const app = express()
const consign = require('consign');


app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())

consign()
  .include('route')
  .then("./config/dbconnect.js")
  .into(app);

module.exports = app;