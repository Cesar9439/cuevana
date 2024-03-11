const express = require('express');
const router = express.Router();
const mediaC = require('../controllers/mediaC');

router.get('/', mediaC.getAllMedia);
router.post('/', mediaC.addmedia);
router.patch('/', mediaC.upMedia);
router.delete('/', mediaC.delMedia);

module.exports = router;