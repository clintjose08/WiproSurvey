const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SurveySchema = new Schema({
  surveyname:{type:String},
  description:{type:String},
  questions:{type:Object},
  thanksMessage:{type:String},
  createrName:{type:String},
  createrContact:{type:Number},
  creterEmail:{type:String}
});
module.exports = mongoose.model('Survey',SurveySchema);
