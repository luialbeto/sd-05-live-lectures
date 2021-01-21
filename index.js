const express = require('express');
const bodyParser = require('body-parser');

const controller = require('./controllers');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products/', controller.product);
app.use('/users/', controller.user);

app.listen(3000, () => {
	console.log('App ouvindo a porta 3000!');
});
