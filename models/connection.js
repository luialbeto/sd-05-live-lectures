const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'root' /* Se necessário, altere o user */,
	password: '' /* Não se esqueça de inserir a senha aqui! */,
	database: 'solid_example'
});

module.exports = connection;
