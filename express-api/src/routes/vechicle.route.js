import express from 'express';
import { Vechicle } from '../models/vechicle.model'


//
let router = express.Router();

//get all vechicle 
router.get('/', (req, res) => {


    Vechicle.find((err, vechicles) => {
        if (err)
            res.send(err);

        res.json(vechicles);

        // res.json({ 'data': vechicles, 'decoded': req.decoded._doc });

    });

});


//add vechicle 
router.post('/', (req, res) => {
    console.log('inside add vechicle', req.body);
    let vechicle = new Vechicle();
    vechicle.brand = req.body.brand;
    vechicle.vechicleModel = req.body.vechicleModel;
    vechicle.transmission = req.body.transmission;
    vechicle.vtype = req.body.vtype;
    vechicle.condition = req.body.condition;
    vechicle.modelYear = req.body.modelYear;
    vechicle.mileAge = req.body.mileAge;
    vechicle.price = req.body.price;
    vechicle.priceNegotiable = req.body.priceNegotiable;
    vechicle.contactName = req.body.contactName;
    vechicle.contactPlace = req.body.contactPlace;
    vechicle.contactPhone = req.body.contactPhone;
    vechicle.description = req.body.description;
    vechicle.imgUrl = req.body.imgUrl;

    // vechicle.imgUrl = 'http://www.copyright-free-photos.org.uk/cars/mini-cooper.jpg';

    vechicle.save((err, data) => {
        if (err)
            res.send(err);

        res.json({
            message: 'Vechicle added Successfully!',
            data: data
        });

    });


});


//delete vechicle by ID
router.delete('/:id', (req, res) => {
    console.log(`Vechicle ID ---> ${req.params.id}`);


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
router.get('/:id', (req, res) => {
    console.log(`Vechicle By Id ---> ${req.params.id}`);
    Vechicle.findById(`${req.params.id}`, (err, vechicle) => {
        if (err) {
            // res.send(err);
            console.log(err);
        }


        res.json(vechicle);


    });


});


//edit Vechicle
router.put('/:id', (req, res) => {

    console.log('Update Vechicle Request ', req.params.id, req.body);
    Vechicle.findById(req.params.id, (err, vechicle) => {
        if (err)
            res.send(err);


        vechicle.brand = req.body.brand;
        vechicle.vechicleModel = req.body.vechicleModel;
        vechicle.transmission = req.body.transmission;
        vechicle.vtype = req.body.vtype;
        vechicle.condition = req.body.condition;
        vechicle.modelYear = req.body.modelYear;
        vechicle.mileAge = req.body.mileAge;
        vechicle.price = req.body.price;
        vechicle.priceNegotiable = req.body.priceNegotiable;
        vechicle.contactName = req.body.contactName;
        vechicle.contactPlace = req.body.contactPlace;
        vechicle.contactPhone = req.body.contactPhone;
        vechicle.description = req.body.description;
        vechicle.imgUrl = req.body.imgUrl;



        vechicle.save((err, data) => {
            if (err)
                res.send(err);

            res.json({
                message: 'Vechicle Updated Successfully!',
                data: data
            });

        });
    });




});





export const VECHICLE_ROUTES = router;