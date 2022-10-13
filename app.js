const { MongoClient } = require("mongodb");
const express = require('express');
const { application } = require("express");
const app = express();

const uri = "mongodb+srv://manikanta:Xelpmoc@cluster0.psvmlaj.mongodb.net/test"
 
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
        

app.get('/', function(req, res){
    res.send("Hello")
    console.log('get api hit')
});




app.listen(8880);
