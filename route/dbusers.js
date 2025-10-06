module.exports = (app) => {
  app.get('/dbusers', async (req, res) => {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await app.DBClient.connect();
      const users = await app.DBClient.db('sample_mflix').collection('users').find({name:  /Baratheon/ }).project({ _id: 0 }).toArray();
      console.log(users)
      res.json(users)
    } finally {
      // Ensures that the client will close when you finish/error
      await app.DBClient.close();
    }
  })
}