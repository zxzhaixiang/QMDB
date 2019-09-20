//import { getDb } from './index'
const {getDb} = require('./index')

const insertOne = (collection, doc) => {
  const db = getDb()
  return db.collection(collection).insertOne(doc)
}

const findOneUpdate = (collection, filter, doc, options = {}) => {
  const db = getDb()
  return db.collection(collection).findOneAndUpdate(filter, doc, options)
}

const findOne = (collection, query, project = {}, sort = {}) => {
  console.log('FINDING ONE')
  const db = getDb()
  console.log('DB', db)
  return db.collection(collection).findOne(query, { projection: project, sort })
}

const updateOne = (collection, filter, doc, options = {}) => {
  const db = getDb()
  return db.collection(collection).updateOne(filter, doc, options)
}

const find = (collection, query, project = {}, sort = {}) => {
  const db = getDb()
  const cursor = db.collection(collection).find(query, { projection: project, sort })
  return cursor.toArray()
}

const deleteOne = (collection, filter) => {
  const db = getDb()
  return db.collection(collection).deleteOne(filter)
}

const distinct = (collection, field={}, query={}, options = {}) => {
  const db = getDb()
  return db.collection(collection).distinct(field, query, options)
}

module.exports = {
  findOne: findOne,
  findOneUpdate: findOneUpdate,
  insertOne: insertOne,
  updateOne: updateOne,
  find: find,
  deleteOne: deleteOne,
  distinct: distinct,

}