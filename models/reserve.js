'use strict'; 
var mongoose = require('mongoose');  
var reserveSchema = new mongoose.Schema({
    ﻿userid : String,
    type : String,
    name : String,
    sex : String,
    birthday : String,
    ID : String,
    idAddress : String,
    liveAddress : String,
    school : String,
    area : String,
    nameM : String,
    mobileM : Number,
    workplaceM : String,
    educationM : String,
    nameF : String,
    mobileF : Number,
    workplaceF : String,
    educationF : String,
    //回复
    mobile: String, 
    time: Number,
    nationcode: String,
    text: String,
    sign: String 
}, {
    collection: 'reserve'
});

module.exports = mongoose.model('reserve', reserveSchema);