import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let vechicle = new Schema({
    brand: String,
    vechicleModel: String,
    transmission: String,
    vtype: String,
    condition: String,
    modelYear: String,
    mileAge: String,
    price: String,
    priceNegotiable: String,
    fuelTypes: String,
    contactName: String,
    contactPlace: String,
    contactPhone: String,
    description: String,
    imgUrl: String
});

export const Vechicle = mongoose.model('Vechicle', vechicle);