const surveyResultModel=require('../models/ResultSchema');
module.exports=function (req, res) {
	const surveyResult = new surveyResultModel();
  surveyResult.surveyname=req.body.surveyname;
  surveyResult.questions=req.body.questions;

  console.log("result",surveyResult);
    surveyResult.save(function (err) {
      if(!err){
        res.send("created")
      }
      else{
        console.log(err);
      }
    });
}
