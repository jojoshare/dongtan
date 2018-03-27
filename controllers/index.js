'use strict';
var co = require('co');
var Promise = require('bluebird'); 
var IndexModel = require('../models/index');
var reserveModel = require('../models/reserve');
var QcloudSms = require("qcloudsms_js");
var appid = 1400079091;  // SDK AppID是1400开头 
var appkey = "6e867cd1bba5a3aef6ff8194a89d1cfc";// 短信应用SDK AppKey

module.exports = function (router) { 

    var model = new IndexModel(); 
    router.get('/', function (req, res) { 
        
        res.render('reserve', model); 
        
    });

    //现场签到取号
    router.post('/reserve', function (req, res) {
        var reqObj = req.body;
        console.log("reserve:"+JSON.stringify(reqObj));
        co(function *(){
  			var reserves = yield reserveModel.findOne({telephone:reqObj.telephone});
 			console.log("reserves:"+JSON.stringify(reserves));
 			res.send(reserves);
		}).catch((err)=>{
  			console.error(err.stack);
		}); 
    });

    //短信发送平台
    router.get('/sendMassage', function (req, res) {
        // 需要发送短信的手机号码
        var phoneNumbers = ["13661844540"];
        // 短信模板ID，需要在短信应用中申请
        var templateId = 99720; 
        // 签名
        var smsSign = "上实东滩"; 
        co(function *(){
            var reserves = yield reserveModel.find({},{telephone:1});
            console.log("reserves:"+JSON.stringify(reserves));
            // 实例化QcloudSms
            var qcloudsms = QcloudSms(appid, appkey);
            
            var msender = qcloudsms.SmsMultiSender();
            var params = ["A3"];
            //// 签名参数未提供或者为空时，会使用默认签名发送短信  
            msender.sendWithParam("86", phoneNumbers, templateId, params, smsSign, "","",function (err, result, resData) {
                if (err){
                    console.log("err: ", err);
                }else{
                    console.log("sendMassage:"+JSON.stringify(resData));
                    res.send(resData); 
                } 
            })  
        }).catch((err)=>{
            console.error(err.stack);
        }); 
    });

    //短信接受平台
    router.post('/replyMassage', function (req, res) { 
        var reqObj = req.body;
        console.log("replyMassage_reqObj: "+JSON.stringify(reqObj));
        var maxNum = 10;  // 单次拉取最大量
        var qcloudsms = QcloudSms(appid, appkey);
        var spuller = qcloudsms.SmsStatusPuller(); 
        // 拉取回复
        spuller.pullReply(maxNum,function (err, result, resData) {
            if (err){
                console.log("err: ", err);
            }else{
                console.log("replyMassage:"+JSON.stringify(resData));
                res.send(resData); 
            } 
        })  
    });

};
