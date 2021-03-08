var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/recipe', function(req, res, next) {
    res.render('recipe/Recipe');
});
module.exports = router;
