const surveyConfigModel=require('../models/surveySchema.model');
module.exports=function (req, res) {
	const surveyConfig = new surveyConfigModel();
		surveyConfigModel.findOne({surveyname:req.params.sName}, function( err, mySchema) {
				if(mySchema){
					// console.log(JSON.stringify(mySchema));
					res.send(mySchema);
				}
				else{
					console.log("mySchema");
				}
		})

		}
