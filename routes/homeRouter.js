const express = require('express');
const router = express.Router();

const homeConstroller = require('../controllers/homeController.js');

router.get('/', homeConstroller.home);

module.exports = router;