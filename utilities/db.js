
const DOTENV = require("../config/default")

const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect(DOTENV.DATABASE_URL).then(()=>{console.log("Connecting to MongoDB successfully !")});

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });