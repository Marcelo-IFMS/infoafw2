module.exports = (app) => {
    app.put('/', (req, res) => {
        res.send('Pagina Inicial PUT')
    })
}