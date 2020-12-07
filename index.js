const express = require('express');

const app = express();

const SERVER_ENV = process.env.SERVER_ENV || 'Não achei';

app.get('/', (req, res) => {
	res.send(`Rodando em:${SERVER_ENV}`);
});

const PORT = process.env.PORT || 3000;

//50811
app.listen(PORT, () => {
	console.log(`Escutando aqui ${PORT}`);
});
