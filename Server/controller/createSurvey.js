const surveyConfigModel=require('../models/surveySchema.model');
module.exports=function (req, res) {
	const surveyConfig = new surveyConfigModel();

			surveyConfig.surveyname=req.body.surveyname;
			surveyConfig.status='draft';

  			surveyConfig.save(function (err) {
     			if(!err){
     				res.send("created")
     			}
  			});

		}
