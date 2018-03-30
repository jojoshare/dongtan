'use strict'; 
var mongoose = require('mongoose');  
var reserveSchema = new mongoose.Schema({    
    seq : Number,
    ﻿userid : String,//编号
    num : Number,//序号
    type : String,//1、升学类别
    name : String,//2、学生姓名
    sex : String,// 3、学生性别
    birthday : String,//4、学生出生日期
    ID : String,//5、学生身份证或居住证号码
    idAddress : String,//6、户口地址
    liveAddress : String,//7、家庭地址
    school : String,// 8、现就读学校名称
    area : String,//9、就读学校所在区
    nameM : String,//10、母亲姓名
    mobileM : Number,//11、母亲移动电话
    workplaceM : String,//12、母亲工作单位
    educationM : String,//13、母亲学历
    nameF : String,//14、父亲姓名
    mobileF : Number,//15、父亲移动电话
    workplaceF : String,//16、父亲工作单位
    educationF : String,//17、父亲学历
    hasCome:{
        type:String,
        default:"N"
    },
    //回复
    mobile: String, //电话清单
    time: Number,
    nationcode: String,
    text: String,
    sign: String 
}, {
    collection: 'reserve'
});

module.exports = mongoose.model('reserve', reserveSchema);