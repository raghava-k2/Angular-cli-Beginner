const express = require('express');
const router = express.Router();
const studentDao=require('../dao/studentDao.js')

/* GET api listing. */
router.get('/', studentDao.selectStudentList);

module.exports = router;