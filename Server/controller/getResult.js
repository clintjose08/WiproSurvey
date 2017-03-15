const surveyResultModel=require('../models/ResultSchema');
module.exports=function (req, res) {
	const surveyResult = new surveyResultModel();
	surveyResultModel.findOne({surveyid:"1234"},function (err, mySchema) {
		if (err) {
			console.log("error");
		}
		if(mySchema){
			console.log(mySchema);
			res.send(mySchema);
		}
		else{
			console.log("Database doesn't exist");
			res.send("Database doesn't exist");
		}
	});
}
