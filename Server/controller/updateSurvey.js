const surveyConfigModel=require('../models/surveySchema.model');
module.exports=function (req, res) {
	const surveyConfig = new surveyConfigModel();
	if(req.body.type=='welcome'){
		surveyConfigModel.findOneAndUpdate({surveyname:"Gejkewkr"},
		{$set:{welcomeMsg:req.body.welcomeMsg,description:req.body.description}},
		function(err,doc){

		      console.log("not exist");

		});
	}
else if(req.body.type=='welcome1'){
	surveyConfigModel.findOneAndUpdate({surveyname:"Gejkewkr"},
	{$set:{welcomeMsg:"hjjhjda",description:req.body.description}},
	function(err,doc){

				console.log("not exist");

	});
}
else{

}


		}
