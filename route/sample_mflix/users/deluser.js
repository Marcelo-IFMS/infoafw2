module.exports = (app) => {
    app.delete('/deluser', async (req, res) => {
        try {
            const name = req.body.name
            const resultado = await app.DBClient.db('sample_mflix')
                .collection('users')
                .deleteOne({ name: name })
            res.status(200).send('Usuário removido com sucesso')
        } catch (error) {
            res.status(400).send(error)
        }
    })
}