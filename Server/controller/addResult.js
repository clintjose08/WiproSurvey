const surveyResultModel=require('../models/ResultSchema');
module.exports=function (req, res) {
	const surveyResult = new surveyResultModel();
  surveyResult.questions=req.body.questions;
  surveyResult.surveyid=req.body.surveyid;

  console.log(surveyResult);
    surveyResult.save(function (err) {
      if(!err){
        res.send("created")
      }
      else{
        console.log(err);
      }
    });
}
