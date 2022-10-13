const express = require('express');

const app = express();

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
    res.send("Hello world");
    console.log('api in other file');
});


app.listen(9696)