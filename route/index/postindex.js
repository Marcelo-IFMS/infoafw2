module.exports = (app) => {
    app.post('/', (req, res) => {
        res.send('Pagina Inicial POST')
    })
}