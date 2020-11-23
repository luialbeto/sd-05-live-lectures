const { MongoClient } = require('mongodb');

const URI = 'mongodb://localhost:27017/live_lecture_27_1';
const DB_NAME = 'live_lecture_27_1';

module.exports = async (collectionName) =>
  MongoClient.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((connection) => connection.db(DB_NAME).collection(collectionName));
