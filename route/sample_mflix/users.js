module.exports = (app) => {
  app.get('/users',  async (req, res) => {
    try {
      await app.DBClient.connect(); //realizar a conexão com o banco 
      const users = await app.DBClient.db('sample_mflix').collection('users').find().toArray();
      res.json(users) 
    } finally {
      // Ensures that the client will close when you finish/error
      await app.DBClient.close();
    }
  })
}