module.exports = (app) => {
  app.get('/abobrinha', (req, res) => {
    res.render('abobrinha')
  })
}