const surveyConfigModel=require('../models/surveySchema.model');
module.exports=function (req, res) {
	const surveyConfig = new surveyConfigModel();

			surveyConfig.surveyname=req.body.surveyname;
			surveyConfig.welcomeMsg=req.body.welcomeMsg;
			surveyConfig.description=req.body.description;
			surveyConfig.createrName=req.body.createrName;
			surveyConfig.creterEmail=req.body.creterEmail;
			surveyConfig.thanksMessage=req.body.thanksMessage;
			surveyConfig.createrContact=req.body.createrContact;
			surveyConfig.questions=req.body.questions;
  			surveyConfig.save(function (err) {
     			if(!err){
     				res.send("created")
     			}
  			});
		}