const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestSchema = new Schema({
  options: { type: Array},
  count: { type: Array },
  questiontype:{type:String},
  question:{type:String},
  maxValue:{type:Number},
  scale:{type:Number}
},{
  _id: false,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});


const ResultSchema = new Schema({

  surveyname:{type:String,required:true},
  status:{type:String},
  questions:[QuestSchema]
});

module.exports = mongoose.model('surveyResults',ResultSchema);
