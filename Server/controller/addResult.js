const surveyResultModel=require('../models/ResultSchema');
module.exports=function (req, res) {
	const surveyResult = new surveyResultModel();
  surveyResult.question=req.body.question;
  surveyResult.questiontype=req.body.questiontype;
  surveyResult.surveyid=req.body.surveyid;
  surveyResult.answer=req.body.answer;
  console.log(req.body);
    surveyResult.save(function (err) {
      if(!err){
        res.send("created")
      }
      else{
        console.log(err);
      }
    });
}
