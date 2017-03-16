const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questSchema=new Schema({
  questionno:{type:Number},
  question:{type:String},
  options:{type:Array}
},{
  _id: false,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});
const SurveySchema = new Schema({
  surveyname:{type:String},
  welcomeMsg:{type:String},
  description:{type:String},
  thanksMessage:{type:String},
  createrName:{type:String},
  createrContact:{type:Number},
  creterEmail:{type:String},
  questions:[questSchema]
});
module.exports = mongoose.model('Survey',SurveySchema);
