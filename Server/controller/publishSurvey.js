const surveyConfigModel=require('../models/ResultSchema');
module.exports=function (req, res) {
	const surveyConfig = new surveyConfigModel();
	// db.surveyresults.update({surveyname:"try","questions.question":"text your comments"},
	// {"$push":{"questions.$.count":"40"}})

		surveyConfigModel.findOneAndUpdate({surveyname:req.params.sName},
			{"$set":	{"status":req.body.status}},
		function(err,doc){
			if(doc){
		      console.log("not exist",doc);
			}
		});
	}
