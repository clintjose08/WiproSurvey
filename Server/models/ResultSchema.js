const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  options: { type: String, required: true },
  count: { type: Number, required: true }
},{
  _id: false,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});


const ResultSchema = new Schema({
  question:{type:String, required:true},
  questiontype:{type:String, required:true},
  surveyid:{type:String,required:true},
  answer:[AnswerSchema]
});

module.exports = mongoose.model('SurveyResult',ResultSchema);
