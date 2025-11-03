module.exports = (app) => {
    app.put('/putuser', async (req, res) => {
        try {
            await app.DBClient.connect();
            console.log(req.body);

            const resultado = await app.DBClient.db('sample_mflix').collection('users')
                .updateOne({ email: req.body.email },
                    {
                        $set: {
                            name: req.body.name,
                            password: req.body.password
                        }
                    })
            res.status(200).send(resultado)
        } catch (error) {
            res.status(400).send(error)
        }
    })
}