import express from 'express';
import { User } from '../models/user.model.'
import jwt from 'jsonwebtoken';
import { CONFIG } from '../config';

//
let router = express.Router();

// //get all wizards
router.post('/authenticate', (req, res) => {

    console.log("Inside authenyication", req.body);
    // ${req.params.id}

    User.findOne({ name: req.body.name }, (err, user) => {
        if (err)
            res.send(err);

        if (!user) {
            res.status(401).json({ message: "User doesn't Exist" });
        } else {
            // req.query.password
            if (user.password === req.body.password) {
                let token = jwt.sign(user, CONFIG.secretKey, {
                    expiresIn: 1440 //expire in 24hrs
                });
                // console.log(token);
                res.json({ message: "Succesfully logged In.....", status: true, token: token, id: user.name });
            } else {
                res.status(401).json({ message: "Invalid Password", status: false });
            }
        }


    });

});


//register user
router.post('/register', (req, res) => {

    console.log('inside register ', req.body);
    let user = new User({
        name: req.body.name,
        password: req.body.password,
        admin: req.body.admin
    });



    user.save((err, user) => {
        if (err)
            res.send(err);

        res.json({
            message: 'User Registered successfully!',
            data: user
        });

    });


});




export const USER_ROUTES = router;