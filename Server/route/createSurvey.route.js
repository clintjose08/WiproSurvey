const createSurveyConfig=require('../controller/createSurvey');
const getSurveyDetails=require('../controller/getDetails');
const updateSurveyConfig=require('../controller/updateSurvey');
const uploadSurveyConfig=require('../controller/uploadSurvey');
const getSurveyConfig=require('../controller/getSurveyConfig');
const deleteQuest=require('../controller/deleteSurveyQuest');
const express = require('express');
const router = express.Router();

router.post('/api/createSurvey',createSurveyConfig);
router.put('/api/deleteQuest/:sName/:surveyQuest',deleteQuest);
router.put('/api/uploadSurvey/:sName',uploadSurveyConfig);
router.post('/api/updateSurvey/:sName',updateSurveyConfig);
router.get('/api/getSurvey/:sName',getSurveyConfig);
router.get('/api/getDetails',getSurveyDetails);
module.exports=router;
