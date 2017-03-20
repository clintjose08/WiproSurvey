const createSurveyConfig=require('../controller/createSurvey');

const updateSurveyConfig=require('../controller/updateSurvey');
const getSurveyConfig=require('../controller/getSurveyConfig');
const deleteQuest=require('../controller/deleteSurveyQuest');
const express = require('express');
const router = express.Router();

router.post('/api/createSurvey',createSurveyConfig);
router.put('/api/deleteQuest/:sName/:i',deleteQuest);
router.post('/api/updateSurvey/:sName',updateSurveyConfig);
router.get('/api/getSurvey/:sName',getSurveyConfig);
module.exports=router;
