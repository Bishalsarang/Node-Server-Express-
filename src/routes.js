const express = require('express');

const router = express.Router();

const controllers = require('./controllers');

router.get('/', controllers.home);
router.get('/read/:fileName', controllers.read);
router.get('/delete/:fileName', controllers.del);
router.get('/write/:fileName/:content', controllers.write);
router.get('/rename/:oldFileName/:newFileName', controllers.rename);

module.exports = router;
