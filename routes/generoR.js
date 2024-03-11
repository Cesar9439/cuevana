const express = require('express');
const router = express.Router();
const generoC = require('../controllers/generoC');

router.get('/', generoC.getAllGeneros);
router.post('/', generoC.newGenero);
router.patch('/', generoC.upDataG);
router.delete('/', generoC.delDataG);

module.exports = router;