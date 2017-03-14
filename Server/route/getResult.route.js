const getResult=require('../controller/getResult');

const express = require('express');
const router = express.Router();

router.get('/api/getResult',getResult);
module.exports=router;
