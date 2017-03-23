const surveyConfigModel=require('../models/ResultSchema');
module.exports=function (req, res) {
	const surveyConfig = new surveyConfigModel();

		surveyConfigModel.findOneAndUpdate({surveyname:req.body.sName},
			{"$push":	{"questions":req.body.options[1]}},
		function(err,doc){
			if(doc){
		      console.log("not exist",doc);
			}
			else{
				console.log("doc pushed")
			}

		});
	}
