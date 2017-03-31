const getResult=require('../controller/getResult');

const express = require('express');
const router = express.Router();

router.get('/api/getResult/:sName',getResult);
module.exports=router;
