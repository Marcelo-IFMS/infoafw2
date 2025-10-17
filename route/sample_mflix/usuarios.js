module.exports = (app) => {
    app.get('/usuarios/:nome', async (req, res) => {
        await app.DBClient.connect();
        const nome = req.params.nome
        const usuarios = 
            await app.DBClient.db('sample_mflix').collection('users')
                .find({ name: new RegExp(nome,'i')}).toArray();
        res.json(usuarios)
        await app.DBClient.close();
    })
}