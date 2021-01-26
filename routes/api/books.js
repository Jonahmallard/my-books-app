var express = require('express');
var router = express.Router();
var booksCtrl = require('../../controllers/api/books');

/* GET /api/books */
router.get('/', booksCtrl.index);
router.post('/', booksCtrl.create);
router.get('/:id', booksCtrl.show);
router.put('/:id', booksCtrl.update);
router.delete('/:id', booksCtrl.delete)

module.exports = router;
