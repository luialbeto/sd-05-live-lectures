const Cats = require('../models/catModel');

const listCats = async (req, res) => {
	const cats = await Cats.getAll();
	res.render('catList', { cats });
};

module.exports = {
	listCats
};
