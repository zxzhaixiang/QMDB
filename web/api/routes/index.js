//import { invokeLambda } from '../aws/lambda';
const {ObjectId} = require('mongodb')
const odb = require('../mongo/odb')
const {invokeLambda} = require('../aws/lambda')

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
  const payload  = req.body 
  lambdaName = ""
  if (lambdaName.length > 1){
    const out = await invokeLambda(lambdaName, payload)
    return res.send(JSON.stringify({movies: out}))
  }
  else{
    // these code should invoke lambda to get recommendations
    const filter = { _id: ObjectId("5d8554b9a44b74f50644cdae") }
    const project = { _id: 0}
    const data = await odb.findOne('movies', filter, project)
    console.log('DATA', data)
    return res.send(JSON.stringify({movies: [data, data, data]}))
  }
})

router.get("/get_meta", async (req, res) => {
  const genreData = await odb.distinct('movies', 'genres')
  console.log('GENRES:', genreData)
  const countryData = await odb.distinct('movies', 'country')
  console.log('COUNTRIES:', countryData)
  const languageData = await odb.distinct('movies', 'language')
  console.log('LANGUAGE:', languageData)
  return res.send(JSON.stringify({ genreData:genreData, countryData: countryData, languageData: languageData }))
})

router.post("/add_to_favorite", async (req, res) => {
  const payload  = req.body 
  // these code should invoke lambda to add to favorite
  lambdaName = ""
  if (lambdaName.length > 1){
    await invokeLambda(lambdaName, payload)
    return res.send("Success")
  }
  else{
    return res.send("Failure")
  }
})

router.post("/get_similar_movies",  async (req, res) => {
  const payload  = req.body 
  lambdaName = ""
  if (lambdaName.length > 1){
    const out = await invokeLambda(lambdaName, payload)
    return res.send(JSON.stringify({movies: out}))
  }
  else{
    console.log('no lambda for get similar movies')
    return res.send("Failure")
  }
})

//get meta info
module.exports = router;
