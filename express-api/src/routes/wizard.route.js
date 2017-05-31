import express from 'express';
import { Wizard } from '../models/wizard.model'


//
let router = express.Router();

//get all wizards
router.get('/', (req, res) => {
    // res.send('All Wizards');

    Wizard.find((err, wizards) => {
        if (err)
            res.send(err);

        // res.json(wizards);

        res.json({ 'data': wizards, 'decoded': req.decoded._doc });

    });

});


//add wizard
router.post('/', (req, res) => {

    let wizard = new Wizard();
    wizard.name = req.body.name;
    wizard.house = req.body.house;
    wizard.pet = req.body.pet;


    wizard.save((err, data) => {
        if (err)
            res.send(err);

        res.json({
            message: 'Wizard added Successfully!',
            data: data
        });

    });

    // res.send('Add Wizards');
});

//view wizard by ID
router.get('/:id', (req, res) => {
    // res.send(`View Wizard of ID ---> ${req.params.id}`);

    Wizard.findById(req.params.id, (err, wizard) => {
        if (err)
            res.send(err);

        res.json(wizard);


    });


});

//edit wizard
router.put('/:id', (req, res) => {
    // res.send(`Update Wizard of ID ---> ${req.params.id}`);

    Wizard.findById(req.params.id, (err, wizard) => {
        if (err)
            res.send(err);

        wizard.name = req.body.name;
        wizard.house = req.body.house;
        wizard.pet = req.body.pet;

        wizard.save((err, data) => {
            if (err)
                res.send(err);

            res.json({
                message: 'Wizard Updated Successfully!',
                data: data
            });

        });
    });




});


//delete wizard
router.delete('/:id', (req, res) => {
    // res.send(`Delete Wizard of ID ---> ${req.params.id}`);

    Wizard.remove({ _id: req.params.id }, (err, data) => {
        if (err)
            res.send(err);

        res.json({
            message: 'Wizard Deleted Successfully!',
            data: data
        });
    });

});

//add list of wizards
router.post('/addall', (req, res) => {
    console.log('req.body ', req.body.wizards);
    // const res_data = JSON.parse(req.body);
    // console.log(res_data);
    // array:Object=req.body;
    // let keys = req.body.json;
    // console.log(keys.length);
    // console.log(keys);
    for (let i in req.body.wizards) {
        console.log(i);
        let jj =  req.body.wizards[i];
        console.log( req.body.wizards[i]);
         console.log( jj);
        let wizard = new Wizard();
        wizard.name = jj.name;
        wizard.house = jj.house;
        wizard.pet = jj.pet;


        wizard.save((err, data) => {
            if (err)
                res.send(err);

                // res.json({
                //     message: 'All Wizards added Successfully!',
                //     data: data
                // });

        });
    }




    // res.send('Add list of Wizards');
});

export const WIZARD_ROUTES = router;