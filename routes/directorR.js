const express = require('express');
const router = express.Router();
const directorC = require('../controllers/directorC');

router.get('/', directorC.getAllDirectors);
router.post('/', directorC.addDirector);
router.patch('/', directorC.upDirectors);
router.delete('/', directorC.delDirector);

module.exports = router;