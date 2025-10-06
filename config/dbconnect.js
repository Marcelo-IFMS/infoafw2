
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.dbconn //"mongodb+srv://mtperez:<db_password>@mtperez.tserylw.mongodb.net/?retryWrites=true&w=majority&appName=mtperez";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
module.exports = (app) => {
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    })
    app.DBClient = client
}