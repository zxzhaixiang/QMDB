//import { invokeLambda } from '../aws/lambda';
const {ObjectId} = require('mongodb')
const odb = require('../mongo/odb')

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
  const filter = { _id: ObjectId("5d852db841fbe6ff6efe46d1") }
  const project = { _id: 0, title: 1}
  const data = await odb.findOne('movies', filter, project)
  console.log('DATA', data)
  return res.send(JSON.stringify(payload))
})

router.post("/get_meta/", async (req, res) => {
  console.log('REQ', req.body)
  const payload  = req.body 
  const genreData = await odb.distinct('movies', 'genre')
  console.log('GENRES:', genreData)
  const countryData = await odb.distinct('movies', 'country')
  console.log('COUNTRIES:', countryData)
  const languageData = await odb.distinct('movies', 'language')
  console.log('LANGUAGE:', languageData)
  return res.send(JSON.stringify({ genreData:genreData, countryData: countryData, languageData: languageData }))
})

router.post("/add_to_favorite", async (req, res) => {
  //user, movie title INPUT
  //update to mongo db
  //call lambda to update model

})
//user, movie title


//get meta info
module.exports = router;
