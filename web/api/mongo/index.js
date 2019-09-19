import { MongoClient } from 'mongodb'

const {
  DATABASE_NAME,
  MONGO_PASSWORD,
  MONGO_USER,
  MONGO_REPLICA_SET,
  MONGO_SHARD_0,
  MONGO_SHARD_1,
  MONGO_SHARD_2,
} = process.env

const generateMongoConnectionString = ({ replicaSet, cluster, database, authenticationDatabase = 'admin', username, password }) => `mongodb://${username}:${password}@${cluster.join(',')}/${database}?ssl=true&replicaSet=${replicaSet}&authSource=${authenticationDatabase}`

// GENERATE CONNECTION STRING
export const mongoConnectionStr = generateMongoConnectionString({
  replicaSet: MONGO_REPLICA_SET,
  cluster: [
    MONGO_SHARD_0,
    MONGO_SHARD_1,
    MONGO_SHARD_2,
  ],
  database: DATABASE_NAME,
  username: MONGO_USER,
  password: MONGO_PASSWORD,
})

const state = {
  db: null,
  mode: null,
}

export const setState = (db, mode) => {
  state.db = db
  state.mode = mode
}

const TEST_URI = `mongodb://localhost/${DATABASE_NAME}`
const PRODUCTION_URI = mongoConnectionStr
export const MODE_TEST = 'mode_test'
export const MODE_PRODUCTION = 'mode_production'

export const connectToMongoPromise = mode => new Promise((resolve, reject) => {
  const uri = mode === MODE_TEST ? TEST_URI : PRODUCTION_URI
  console.log('connecting to mongo')
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      console.log('error connecting to mongo', err)
      return reject(err)
    }
    return resolve(client.db(DATABASE_NAME))
  })
})

export const getDb = () => state.db
