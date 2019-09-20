var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/image/:imageId", function(req, res, next) {
  var params = { Bucket: keys.AWS_BUCKET, Key: req.params.imageId };
  s3.getObject(params, function(err, data) {
    if (err) {
      return res.send({ error: err });
    }
    res.send(data.Body);
  });
});


module.exports = router;
