const surveyResultModel=require('../models/ResultSchema');

var data=[];
module.exports=function (req, res) {
	const surveyResult = new surveyResultModel();
	surveyResultModel.find({surveyid:"3454"},function (err, mySchema) {
		if (err) {
			console.log("error in survey");
		}
		if(mySchema){
			console.log(mySchema);
			res.send(mySchema)
		}
		else{
			console.log("Database survey doesn't exist");
			res.send("Database survey doesn't exist");
		}
	});


}
