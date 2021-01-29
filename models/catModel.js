const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	database: 'live_lecture_32_3',
	password: ''
});

const getAll = async () => {
	const [ cats ] = await connection.execute('SELECT name, age FROM live_lecture_32_3.cats');
	return cats;
};

const getCatById = async (id) => {
	const [ cat ] = connection.execute('SELECT name, age FROM live_lecture_32_3.cats WHERE id = ?', [ id ]);
	return cat;
};

const add = async (name, age) =>
	connection.execute('INSERT INTO live_lecture_32_3.cats (name, age) VALUES (?,?)', [ name, age ]);

const isValid = (name, age) => typeof name === 'string' && name.length >= 3 && name.length < 30 && age && age > 0;

module.exports = {
	getAll,
	getCatById,
	add,
	isValid
};
