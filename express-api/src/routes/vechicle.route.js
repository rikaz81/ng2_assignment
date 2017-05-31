import express from 'express';
import { Vechicle } from '../models/vechicle.model'


//
let router = express.Router();

//get all wizards
router.get('/', (req, res) => {
    // res.send('All Wizards');

    Vechicle.find((err, vechicles) => {
        if (err)
            res.send(err);

        res.json(vechicles);

        // res.json({ 'data': vechicles, 'decoded': req.decoded._doc });

    });

});


//add wizard
router.post('/', (req, res) => {
    console.log('inside add vechicle', req.body);
    let vechicle = new Vechicle();
    vechicle.brand = req.body.brand;
    vechicle.vechicleModel = req.body.vechicleModel;
    vechicle.transmission = req.body.transmission;
    vechicle.vtype = req.body.vtype;
    vechicle.condition = req.body.condition;
    vechicle.modelYear = req.body.modelYear;
    vechicle.contactName = req.body.contactName;
    vechicle.contactPlace = req.body.contactPlace;
    vechicle.contactPhone = req.body.contactPhone;
    vechicle.imgUrl = req.body.imgUrl;

    vechicle.save((err, data) => {
        if (err)
            res.send(err);

        res.json({
            message: 'Vechicle added Successfully!',
            data: data
        });

    });

    // res.send('Add Wizards');
});


//delete wizard
router.delete('/vdel/:id', (req, res) => {
    console.log(`Vechicle Wizard of ID ---> ${req.params.id}`);


    Vechicle.remove({ _id: req.params.id }, (err, data) => {
        if (err)
            res.send(err);


        console.log('Vechicle Deleted Successfully!');
        res.json({
            message: 'Vechicle Deleted Successfully!',
            data: data
        });
    });

});


//view vechicle by ID
router.get('/vbyid/:id', (req, res) => {
    // res.send(`View Wizard of ID ---> ${req.params.id}`);
console.log(`Vechicle By Id ---> ${req.params.id}`);
    Vechicle.findById(`${req.params.id}`, (err, vechicle) => {
        if (err){
            // res.send(err);
            console.log(err);
        }
            

        res.json(vechicle);


    });


});








export const VECHICLE_ROUTES = router;