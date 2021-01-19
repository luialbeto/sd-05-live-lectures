const express = require('express');
const bodyParser = require('body-parser');

const UserModel = require('./models/User');
const userController = require('./controllers/userController');
const databaseConnection = require('./models/connection');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = databaseConnection;
const userFactory = UserModel.factory(db, [ 'admin', 'user' ]);

app.post('/users', userController.createUser(userFactory));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Tô por aqui --> ${PORT}`);
});
