const { MongoClient } = require('mongodb');

let connection;

const DB_NAME = 'musicClass';
const DB_URI = `mongodb://localhost:27017/${DB_NAME}`;

async function getCollection(collectionName) {
  connection =
    connection ||
    (await MongoClient.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }));

  return connection.db(DB_NAME).collection(collectionName);
}

module.exports = getCollection;
