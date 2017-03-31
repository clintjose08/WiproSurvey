const addResult=require('../controller/addResult');
const answerSurvey = require('../controller/answerSurvey')
const express = require('express');
const router = express.Router();

console.log("inside add result route");
router.post('/api/addResult',addResult);
router.put('/api/answerSurvey/:sName',answerSurvey)
module.exports=router;
