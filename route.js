const express = require('express');

const app2 = express();


/**
 * @swagger
 * /get:
 *  get:
 *      summary: This api is use to check if get method is working or not
 *      description: This api is use to check if get method is working or not
 *      responses:
 *          200:
 *              description: To test Get method
 */

app2.get('/get', function(req, res) {
    res.send("Hello world");
    console.log('api in other file');
});


//------------------REGISTER----------------------------------

/**
 * @swagger
 * /register:
 *  post:
 *      summary: used to register to MOngodb
 *      description: This api is used to register to  MOngodb
 *      requestBody:
 *          required: true
 *          content:
 *             application/json:
 *                  schema:
 *                     type: array
 *                     items:
 *                        $ref:'#components/schema/shop'
 *      responses:
 *          200:
 *              description: Added successfully
 */


app2.post("/register", async (req, res) => {
    try{
      
        const newUser = new User({
            username: req.body.username,
            email: req.body.email.toLowerCase(),
            password:  req.body.password
      
          });
            const result = await authSchema.validateAsync(req.body)
            console.log(result)
            const val = await newUser.save();
             res.json(val);
            // const accessToken = await signAccessToken(val.id) 
            // res.send({accessToken})
          }
    
     catch (err) {
        if(err.isJoi === true) err.status = 422
        res.send(err)
    }
});




module.exports = app2