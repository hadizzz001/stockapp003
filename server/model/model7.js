const mongoose = require('mongoose');

var schema = new mongoose.Schema({  
    Dname: String,
    Did: Number,
    Damount: Number
})

const Deliverydb = mongoose.model('Deliverydb',schema);
module.exports = Deliverydb;

 
