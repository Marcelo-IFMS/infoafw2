module.exports = (app) => {
    app.post('/postuser', async (req, res) => {
        try{
            await app.DBClient.connect();
            const resultado = await app.DBClient.db('sample_mflix').collection('users').insertOne(req.body)
            res.status(200).send(resultado) 
        }catch(error){
            res.status(400).send(error)
        }
    })
}