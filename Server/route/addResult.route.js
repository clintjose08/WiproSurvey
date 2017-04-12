const addResult=require('../controller/addResult');
const answerSurvey = require('../controller/answerSurvey');
const fullAnswers = require('../controller/fullAnswers');
const publishSurvey = require('../controller/publishSurvey');
const express = require('express');
const router = express.Router();

console.log("inside add result route");
router.post('/api/addResult',addResult);
router.post('/api/answerSurvey/:sName',answerSurvey);
router.post('/api/fullAnswers/:sName',fullAnswers);
router.put('/api/publishSurvey/:sName',publishSurvey)
module.exports=router;
