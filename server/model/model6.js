const mongoose = require('mongoose');

var schema = new mongoose.Schema({ 
    login: Number,
    mac: String,
    tid: Number
})

const Logindb = mongoose.model('logindb',schema);
module.exports = Logindb;

 
