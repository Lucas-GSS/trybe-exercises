const express = require('express');
const router = express.Router();

const pingMiddleware = require('../middlewares/pingMiddleware');

router.get('/', pingMiddleware);

module.exports = router;