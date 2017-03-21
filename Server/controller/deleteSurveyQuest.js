const surveyConfigModel=require('../models/surveySchema.model');
module.exports=function (req, res) {
	const surveyConfig = new surveyConfigModel();

		surveyConfigModel.findOneAndUpdate({surveyname:req.body.sName},
		{$pop:{questions}},
		function(err,doc){

		      console.log("deleted");

		});
	}
