const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResultSchema = new Schema({
  questionno: {type:Number, required:true},
  surveyid:{type:Number, required:true},
  answer: { type: String, required: true }
});

module.exports = mongoose.model('SurveyResult',ResultSchema);
