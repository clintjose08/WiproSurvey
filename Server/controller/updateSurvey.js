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
else if(req.body.type=='thanksMessage'){
	surveyConfigModel.findOneAndUpdate({surveyname:"Gejkewkr"},
	{$set:{
		creterEmail:req.body.creterEmail,
		createrName:req.body.createrName,
		thanksMessage:req.body.thanksMessage,
		createrContact:req.body.createrContact
	}},
	function(err,doc){

				console.log("not exist");

	});
}
else if(req.body.type=='yesorno'){
	surveyConfigModel.findOneAndUpdate({surveyname:"Gejkewkr"},
	{$push:{
		questions:req.body.questions
	}},
	function(err,doc){

				console.log("not exist");

	});
}
else if(req.body.type=='starrate'){
	surveyConfigModel.findOneAndUpdate({surveyname:"Gejkewkr"},
	{$push:{
		questions:req.body.questions
	}},
	function(err,doc){

				console.log("not exist");

	});
}
else if(req.body.type=='slider'){
	surveyConfigModel.findOneAndUpdate({surveyname:"Gejkewkr"},
	{$push:{
		questions:req.body.questions
	}},
	function(err,doc){

				console.log("not exist");

	});
}
else if(req.body.type=='singletext'){
	surveyConfigModel.findOneAndUpdate({surveyname:"Gejkewkr"},
	{$push:{
		questions:req.body.questions
	}},
	function(err,doc){

				console.log("not exist");

	});
}
else if(req.body.type=='multichoice'){
	surveyConfigModel.findOneAndUpdate({surveyname:"Gejkewkr"},
	{$push:{
		questions:req.body.questions
	}},
	function(err,doc){

				console.log("not exist");

	});
}
else if(req.body.type=='dropdown'){
	surveyConfigModel.findOneAndUpdate({surveyname:"Gejkewkr"},
	{$push:{
		questions:req.body.questions
	}},
	function(err,doc){

				console.log("not exist");

	});
}
else if(req.body.type=='comments'){
	surveyConfigModel.findOneAndUpdate({surveyname:"Gejkewkr"},
	{$push:{
		questions:req.body.questions
	}},
	function(err,doc){

				console.log("not exist");

	});
}
else if(req.body.type=='checkbox'){
	surveyConfigModel.findOneAndUpdate({surveyname:"Gejkewkr"},
	{$push:{
		questions:req.body.questions
	}},
	function(err,doc){

				console.log("not exist");

	});
}
else{

}


		}
