const surveyConfigModel=require('../models/surveySchema.model');
module.exports=function (req, res) {
	const surveyConfig = new surveyConfigModel();

			surveyConfig.surveyname=req.body.surveyname;
			surveyConfig.status=req.body.status;
			surveyConfig.welcomeMsg=req.body.welcomeMsg;
			surveyConfig.description=req.body.description;
			surveyConfig.thanksmessage=req.body.thanksmessage;
			surveyConfig.creatercontact=req.body.creatercontact;
			surveyConfig.creatername=req.body.creatername;
			surveyConfig.creteremail=req.body.creteremail;
			surveyConfig.questions=req.body.questions;
  			surveyConfig.save(function (err) {
     			if(!err){
     				res.send("created")
     			}
  			});

		}
