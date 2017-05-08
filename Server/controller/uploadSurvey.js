const surveyConfigModel=require('../models/surveySchema.model');
module.exports=function (req, res) {
	const surveyConfig = new surveyConfigModel();
  surveyConfigModel.findOneAndUpdate({surveyname:req.params.sName},
  {$set:
    {
      welcomeMsg:req.body.welcomeMsg,
      description:req.body.description,
      thanksMessage:req.body.thanksMessage,
      createrContact:req.body.createrContact,
      createrName:req.body.createrName,
      createrEmail:req.body.createrEmail,
      questions:req.body.questions
    }
  },
  function(err,doc){
  res.send("created");
        console.log("not exist");

  });

		}
