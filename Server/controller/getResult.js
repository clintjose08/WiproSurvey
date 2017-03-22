const surveyResultModel=require('../models/ResultSchema');
const sliderResultModel=require('../models/sliderResultSchema');
const commentResultModel=require('../models/commentResultSchema');
var data=[];
module.exports=function (req, res) {
	const surveyResult = new surveyResultModel();
	surveyResultModel.find({surveyid:"345"},function (err, mySchema) {
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
