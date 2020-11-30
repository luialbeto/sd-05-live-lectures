const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const authMiddleware = require('../middlewares/auth');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/posts', routes.getPosts);
app.post('/users', routes.createUsers);
app.post('/login', routes.login);
app.post('/posts', authMiddleware, routes.createPost);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
