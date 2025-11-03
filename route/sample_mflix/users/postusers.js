module.exports = (app) => {
    app.post('/postusers', async (req, res) => {
        try {
            const name = req.body.name
            const email = req.body.email
            const password = req.body.password
            await app.DBClient.connect();
            const resultado = app.DBClient.db('sample_mflix')
                .collection('users')
                .insertOne({ name: name, email: email, password: password })
            res.status(200).send("Dados Gravados Concluido")
        } catch (error) {
            res.status(400).send("Erro ao Gravar:" + error)
        }
    })
}