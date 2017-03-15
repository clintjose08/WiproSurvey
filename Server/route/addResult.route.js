const addResult=require('../controller/addResult');

const express = require('express');
const router = express.Router();

router.post('/api/addResult',addResult);
module.exports=router;
