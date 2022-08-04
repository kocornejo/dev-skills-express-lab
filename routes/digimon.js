const express = require('express');
const router = express.Router();
const digimanController = require('../controllers/digimon');


router.get('/', digimanController.index);
router.get('/new', digimanController.new);
router.get('/:id', digimanController.show);
router.post('/', digimanController.create);
router.delete('/:id', digimanController.delete);

module.exports = router;
