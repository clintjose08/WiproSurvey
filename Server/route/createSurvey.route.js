const createSurveyConfig=require('../controller/createSurvey');
const updateSurveyConfig=require('../controller/updateSurvey');

const express = require('express');
const router = express.Router();

router.post('/api/createSurvey',createSurveyConfig);
router.post('/api/updateSurvey',updateSurveyConfig);
module.exports=router;
