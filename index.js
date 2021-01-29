const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');

const catController = require('./controllers/catController');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/cats', catController.listCats);

app.listen(3001, () => {
	console.log('Ouvindo a porta 3001!');
});
