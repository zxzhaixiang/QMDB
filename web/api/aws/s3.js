import AWS from './setup'


const S3_BUCKET = process.env.S3_BUCKET

const s3 = new AWS.S3()

// Now lets export this function so we can call it from somewhere else
const getSignedUrl = (Key, instruction) => new Promise((resolve, reject) => {
  // Set up the payload of what we are sending to the S3 api
  // ContentType must match PUT request content-type header
  const s3Params = {
    Bucket: S3_BUCKET,
    Key,
    Expires: 100, // seconds
  };

  if (instruction === 'putObject') {
    s3Params.ContentType = 'application/octet-stream'
  }
  // Make a request to the S3 API to get a signed URL which we can use to upload our file
  s3.getSignedUrl(instruction, s3Params, (err, data) => {
    if (err) {
      console.log(err);
      reject(err)
    }

    // Data payload of what we are sending back, the url of the signedRequest
    // and a URL where we can access the content after its saved.
    const returnData = {
      signedUrl: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${Key}`,
    };
    // Send it all back
    resolve(returnData)
  });
})

export const getSignedUrlUpload = Key => getSignedUrl(Key, 'putObject')
export const getSignedUrlDownload = Key => getSignedUrl(Key, 'getObject')

export const checkObjectExistance = Key => new Promise((resolve, reject) => {
  const params = {
    Bucket: S3_BUCKET,
    Key,
  }
  console.log('looking for this', params)
  s3.headObject(params, (err, data) => {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})
