const axios = require('axios');
const Pokedex = require('./Pokedex');

const BASE_URL = 'https://pokeapi.co/api/v2/';

jest.mock('axios');

describe('Pokedex Model', () => {
	describe('Get pokemon by id', () => {
		test('When getting a Pokemon with id 1, should return an single Pokemon with id, name and species', async () => {
			//arrange
			const mockData = {
				data: {
					id: 1,
					name: 'bulbasaur',
					species: {
						name: 'bulbasaur',
						url: 'https://pokeapi.co/api/v2/pokemon-species/1/'
					}
				}
			};

			axios.get.mockResolvedValueOnce(mockData);

			//Act
			const res = await Pokedex.getPokemonById(1);

			//Assert
			expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/pokemon/1`);
			expect(res).toStrictEqual(mockData.data);
		});

		test('When getting a Pokemon with an unexsisting id, should thrown an error', async () => {
			try {
				//arrange
				axios.get.mockResolvedValueOnce();

				//act
				await Pokedex.getPokemonById(12920);
			} catch (e) {
				//assert
				console.log(e.message);
				expect(e.message).toBe("Cannot read property 'data' of undefined");
			}
		});
	});
});
