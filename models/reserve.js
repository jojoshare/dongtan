'use strict'; 
var mongoose = require('mongoose');  
var reserveSchema = new mongoose.Schema({
    userid: String,                                                                                                                         
     name: String,                                                                                                                           
     mobile: String,
     mobileM: String,
     mobileF: String,
     time: Number,
     nationcode: String,
     text: String,
     sign: String 
}, {
    collection: 'reserve'
});

module.exports = mongoose.model('reserve', reserveSchema);