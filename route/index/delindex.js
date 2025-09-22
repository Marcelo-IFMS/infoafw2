module.exports = (app) => {
    app.delete('/', (req, res) => {
        res.send('Pagina Inicial DELETE')
    })
}