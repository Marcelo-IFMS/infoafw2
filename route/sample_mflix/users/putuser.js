module.exports = (app) => {
    app.put('/putuser', async (req, res) => {
        try {
            const name = req.body.name
            const email = req.body.email
            const password = req.body.password
            const resultado = await app.DBClient.db('sample_mflix')
                .collection('users')
                .updateOne( {name: name},{ $set:{email:email,password:password}})
            res.status(200).json({status:"200",msg:'Atualizado com sucesso'})
        } catch (error) {
             
            res.status(400).json({status:"400",msg:'erro'})
        }
    })
}