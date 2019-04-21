const path = require('path');

const express = require('express');

const router = express.Router();

const control = require('../controllers/def');

//serve entry page
router.get('/', control.homePage);

//Serve 404 page
router.use('/', control.pageNotFound);

module.exports = router;