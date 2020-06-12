var express = require('express');

var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

var item = require('../controllers/controller');

router.get('/', item.list);

router.get('/show/:id', item.show);

router.get('/create', item.create);

router.post('/save', item.save);

router.get('/edit/:id', item.edit);

router.post('/update/:id', item.update);

router.post('/delete/:id', item.delete);

module.exports = router;