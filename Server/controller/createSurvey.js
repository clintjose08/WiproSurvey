const surveyConfigModel=require('../models/surveySchema.model');
module.exports=function (req, res) {
	const surveyConfig = new surveyConfigModel();

			surveyConfig.surveyname=req.body.surveyname;
			surveyConfig.createrName=req.body.createrName;
			surveyConfig.creterEmail=req.body.creterEmail;
			surveyConfig.questions=req.body.questions;
  			surveyConfig.save(function (err) {
     			if(!err){
     				res.send("created")
     			}
  			});
		}
