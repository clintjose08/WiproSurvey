const surveyConfigModel=require('../models/surveySchema.model');
module.exports=function (req, res) {
	const surveyConfig = new surveyConfigModel();

		surveyConfigModel.findOneAndUpdate({surveyname:req.params.sName},
		{$pull:{questions:{questionQ:req.params.surveyQuest}}},
		function(err,doc){

		      console.log("deleted");

		});
	}
