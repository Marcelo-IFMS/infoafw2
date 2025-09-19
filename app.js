const app = require('./config/server')
const port = require('./config/port')

const index = require('./route/index')(app)
const script = require('./route/script')(app)
const cursos = require('./route/cursos')(app)
const pesquisa = require('./route/pesquisa')(app)
const abobrinha = require('./route/abobrinha')(app)
const esportes = require('./route/esportes')(app)

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