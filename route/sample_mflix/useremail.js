module.exports = (app) => {
    app.get('/useremail/:email', async (req, res) => {
        await app.DBClient.connect();
        const email = req.params.email
        const usuarios =
            await app.DBClient.db('sample_mflix').collection('users')
                .find({ email: new RegExp(email, 'i') }).toArray();
        res.json(usuarios)
    })
    app.get('/useremail/:email/:usuario', async (req, res) => {
        await app.DBClient.connect();
        const email = req.params.email
        const usuario = req.params.usuario
        const resultado = await app.DBClient.db('sample_mflix').collection('users')
            .find({
                $and: [
                    { email: new RegExp(email, 'i') },
                    { name: new RegExp(usuario, 'i') } //{ name: new RegExp('^'+usuario+'$', 'i') } 
                ]
            })
            .toArray()
        res.json(resultado)
    })
}