import AWS from './setup'

const lambda = new AWS.Lambda()

export const invokeLambda  = (lambdaName, payload) => new Promise((resolve, reject) => {
  //console.log('payload:', payload)
  const params ={
    FunctionName: lambdaName,
    Payload: JSON.stringify(payload),
  }
  //console.log('lambda params:', params)
  lambda.invoke(params, function(err, data) {
    if (err) {
      console.log(err, err.stack)
      reject(err)
    }
    else {
      console.log(data)
      resolve(data)
    }
  })
})

  