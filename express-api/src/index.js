// console.log("Hello World");
// console.log("Hot Re-Load Enabled...456!");

import express from 'express';
import bodyParser from 'body-parser'
import { VECHICLE_ROUTES } from './routes/vechicle.route'
import { WIZARD_ROUTES } from './routes/wizard.route'
import { USER_ROUTES } from './routes/user.route.'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken';
import { CONFIG } from './config';
//application initialization
let app = express();

//enables POST, PUT body data to beretreived as JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', 3000);

//connect to mongoDB instance created on mongoLabs
mongoose.connect('mongodb://root:root@ds133231.mlab.com:33231/hogwarts');


//tells express where your view will be
app.set('views', 'src/views');
app.set('view engine', 'pug');
//plug demo
app.get('/', (req, res) => {
    res.render('hello');
});


//middleware ex: implementation of authentication
app.use('/wizard', (req, res, next) => {
    console.log("something happened");
    let token = req.headers['x-access-token'];
    if (!token) {
        res.status(401).json({ message: "Not Authorized" });
    } else {
        jwt.verify(token, CONFIG.secretKey, (err, decoded) => {
            if (err) {
                res.status(401).json({ message: "Invalid Token" });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    }
});


app.use('/vechicle', function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();

});

app.get('/', (req, res) => {
    // res.send('Hello World !!!');

    //Sending JSON Response
    res.json({ 'message': 'Hello World' });
});


// app.post('/example-post', (req, res) => {

//     res.json({
//         message: 'Post Successful',
//         payload: req.body,
//         headers: req.headers
//     });
// });

app.use('/vechicle', VECHICLE_ROUTES);

app.use('/wizard', WIZARD_ROUTES);

//localhost:3000/user/register
app.use('/user', USER_ROUTES);

//to run the server
app.listen(app.get('port'), () => {
    //EC6 syntax
    console.log(`Node Server is running on port EC6 : ${app.get('port')}`);

    console.log('Node Server is running on port : ' + app.get('port'));
});