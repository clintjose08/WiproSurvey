const createSurveyConfig=require('../controller/createSurvey');
const updateSurveyConfig=require('../controller/updateSurvey');
const getSurveyConfig=require('../controller/getSurveyConfig');

const express = require('express');
const router = express.Router();

router.post('/api/createSurvey',createSurveyConfig);
router.post('/api/updateSurvey',updateSurveyConfig);
router.get('/api/getSurvey/:sName',getSurveyConfig);
module.exports=router;
