var express = require('express');
var Category = require('../models/category');
var router = express.Router();
var collectDateSortOffers = require('../middleware/collectOffers').collectDateSortOffers;

router.get('/', function(req, res, next) {
    Category.find().select('name shortName').exec(function (err, doc) {
        collectDateSortOffers(5, function (result) {
            res.send({cat: doc, offers: result});
        });
    });
});

router.use('/account', require('./user'));
router.use('/offer', require('./offer'));
router.use('/board', require('./board'));

module.exports = router;
