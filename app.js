const { MongoClient } = require("mongodb");
const express = require('express');
// const { application } = require("express");
const app = express();
const { app2 } = require ( './route.js' );


const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const bodyparser = require('body-parser');
const { response } = require('express');
app.use(bodyparser.json());

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node JS Orders Project for MYSQL',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:4440/'
            }
        ]
    },
    apis: ['./app.js', './route.js']
}


const swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

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
   
/**
 * @swagger
 * /:
 *  get:
 *      summary: This api is use to check if get method is working or not
 *      description: This api is use to check if get method is working or not
 *      responses:
 *          200:
 *              description: To test Get method
 */


app.get('/', function(req, res){
    res.send("Hello")
    console.log('get api hit')
});

/**
 * @swagger
 * /createorder:
 *  post:
 *      summary: User to insert orders
 *      description: this api fetch from mysql
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schemas:
 *                      $ref: '#component/schemas/Orders'
 *      responses:
 *          200:
 *              description: added successfully Mysql
 */


app.post("/createorder", function (req, res) {

    var Body = req.body;

    con.query("INSERT INTO Orders SET ?", Body, function (err, results) {
        if (err) {
            console.log(err);
        } else {
            console.log(results);
            res.json({
                message: "Data Created successfully",
            })
            console.log(Body);
        }

    });
});


app.listen(4440);


module.exports = app