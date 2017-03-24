const surveyConfigModel=require('../models/ResultSchema');
module.exports=function (req, res) {
	const surveyConfig = new surveyConfigModel();
	// db.surveyresults.update({surveyname:"try","questions.question":"text your comments"},
	// {"$push":{"questions.$.count":"40"}})

		surveyConfigModel.findOneAndUpdate({surveyname:req.body.surveyName,"questions.question":req.body.options[0]},
			{"$push":	{"questions.$.count":req.body.options[1]}},
		function(err,doc){
			if(doc){
		      console.log("not exist",doc);
			}
			else{
				console.log("doc pushed",req.body.options[1],req.body.surveyName)
			}

		});
	}
