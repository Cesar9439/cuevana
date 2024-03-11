const express = require('express');
const router = express.Router();
const producerC = require('../controllers/producerC');

router.get('/', producerC.getAllProducers);
router.post('/', producerC.addProductora);
router.patch('/', producerC.upProducers);
router.delete('/', producerC.delProducers);

module.exports = router;
