const express = require('express');
const router = express.Router();
const tipoC = require('../controllers/tipoC');

router.post('/', tipoC.createTipo);
router.get('/', tipoC.getAllTipo);
router.patch('/',tipoC.upData);
router.delete('/',tipoC.delData);

module.exports = router;