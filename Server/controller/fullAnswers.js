const surveyConfigModel=require('../models/ResultSchema');
module.exports=function (req, res) {
	const surveyConfig = new surveyConfigModel();
	// db.surveyresults.update({surveyname:"try","questions.question":"text your comments"},
	// {"$push":{"questions.$.count":"40"}})
console.log("recived questio:",req.body.length);
for(i=0;i<req.body.length;i++){
  console.log("dta :",i, req.body[i].answer);
  console.log("sname: ",req.params.sName);
  surveyConfigModel.findOneAndUpdate({surveyname:req.params.sName,"questions.question":req.body[i].quest},
    {"$push":	{"questions.$.count":req.body[i].answer}},
  function(err,doc){
    if(doc){
        console.log("pushed");
    }
    else{
      res.send("ERR");
      console.log("failed to push",req.body[i].answer)
    }

  });
 }res.send("DONE");
}
