var express = require('express');
var router = express.Router();
var booksCtrl = require('../../controllers/api/books');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

/* GET /api/books */
router.get('/', booksCtrl.index);
router.post('/', ensureLoggedIn, booksCtrl.create);
router.get('/:id', ensureLoggedIn, booksCtrl.show);
router.put('/:id', ensureLoggedIn, booksCtrl.update);
router.delete('/:id', ensureLoggedIn, booksCtrl.delete)

module.exports = router;
