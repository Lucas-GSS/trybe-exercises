const router = require('express').Router();
const { getAddress } = require('../controllers/cepController');

router.get('/:cep', getAddress);

module.exports = router;