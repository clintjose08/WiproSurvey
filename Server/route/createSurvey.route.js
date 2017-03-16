const createSurveyConfig=require('../controller/createSurvey');

const express = require('express');
const router = express.Router();

router.post('/api/createSurvey',createSurveyConfig);
module.exports=router;