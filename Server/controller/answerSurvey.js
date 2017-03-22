const surveyConfigModel=require('../models/ResultSchema');
module.exports=function (req, res) {
	const surveyConfig = new surveyConfigModel();
	
		surveyConfigModel.findOneAndUpdate({surveyname:req.body.sName},
		{$push:{"questions[0]":{"count":req.body.options[1]}}},
		function(err,doc){
			if(err){
		      console.log("not exist",err);
			}
			else{
				console.log("doc pushed")
			}

		});
	}