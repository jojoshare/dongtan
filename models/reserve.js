'use strict'; 
var mongoose = require('mongoose');  
var reserveSchema = new mongoose.Schema({
    userid: String,                                                                                                                         
     name: String,                                                                                                                           
     telephone: String  
}, {
    collection: 'reserve'
});

module.exports = mongoose.model('reserve', reserveSchema);