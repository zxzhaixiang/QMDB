import { invokeLambda } from '../aws/lambda';
import { updateOne, findOne, insertOne } from '../mongo/odb'
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

router.post("/get_recommendation", async (req, res) => {
  console.log('REQ', req.body)
  const payload  = req.body 
  console.log('Payload:', JSON.stringify(payload))
  return res.send(JSON.stringify(payload))
})

module.exports = router;
