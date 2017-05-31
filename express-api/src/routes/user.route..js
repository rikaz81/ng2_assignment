import express from 'express';
import { User } from '../models/user.model.'
import jwt from 'jsonwebtoken';
import { CONFIG } from '../config';

//
let router = express.Router();

// //get all wizards
router.get('/authenticate', (req, res) => {


    User.findOne({ name: req.query.name }, (err, user) => {
        if (err)
            res.send(err);

        if (!user) {
            res.status(401).json({ message: "User doesn't Exist" });
        } else {
            if (user.password === req.query.password) {
                let token = jwt.sign(user, CONFIG.secretKey, {
                    expiresIn: 1440 //expire in 24hrs
                });

                res.json({ message: "Succesfully logged In.....", token: token });
            } else {
                res.status(401).json({ message: "Invalid Password" });
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