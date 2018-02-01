var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {
      date: 'xxxxx',
      name: 'sampleName1'
    },
    {
      date: 'xxxxx',
      name: 'sampleName2'
    },
    {
      date: 'xxxxx',
      name: 'sampleName3'
    }
  ]);
});

module.exports = router;
