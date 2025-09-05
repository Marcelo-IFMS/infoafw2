const express = require('express')//get, put, delete,psot são os métodos HTTP
const app = express()
const port = 3000

app.set('view engine','ejs')

app.all('/cursos',(req,res,next)=>{
    console.log(req.method)
    next()
})
app.get('/', (req, res) => {
  res.send('<html><body><h1>olá turma Info A</h1></body></html>')
})
app.get('/cursos', (req, res) => {
  res.render('cursos')
})
app.get('/abobrinha',(req,res)=>{
  res.render('abobrinha')
})
app.get('/pesquisa',(req,res)=>{
  res.render('pesquisa')
})
app.get('/esportes',(req,res)=>{
  res.render('esportes')
})
//pesquisa esportes
app.post('/', (req, res) => {
  res.send('Pagina Inicial POST')
})
app.put('/', (req, res) => {
  res.send('Pagina Inicial PUT')
})
app.delete('/', (req, res) => {
  res.send('Pagina Inicial DELETE')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})