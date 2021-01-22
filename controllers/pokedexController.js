const Pokedex = require('../models/Pokedex.js');

const getPokemonById = async (req, res) => {
	try {
		const pokemon = await Pokedex.getPokemonById(req.params.id);

		if (!pokemon) {
			res.status(404);
			return res.json({ message: 'Pokemon não encontrado' });
		}

		res.status(200);
		res.json(pokemon);
	} catch (e) {
		if (process.env.NODE_ENV !== 'test') console.log(e);
		res.status(500);
		res.json({ message: 'Algo deu errado' });
	}
};

const getAllByTypeId = async (req, res) => {
	try {
		const types = await Pokedex.getAllByTypeId(req.params.id);

		res.status(200);
		res.json(types);
	} catch (e) {
		res.status(500);
		res.json({ message: 'Algo deu errado' });
	}
};

const searchItemsByName = async (req, res) => {
	const items = await Pokedex.searchItemsByName(req.params.term);

	if (items.length === 0) {
		res.status(404);
		return res.json({ message: 'Nenhum item não encontrado com esse termo' });
	}

	res.status(200);
	res.json(items);
};

module.exports = {
	getPokemonById,
	searchItemsByName,
	getAllByTypeId
};
