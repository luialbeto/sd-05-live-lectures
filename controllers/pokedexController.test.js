const Pokedex = require('../models/Pokedex');
const pokedexController = require('./pokedexController');

describe('Controllers', () => {
	describe('Get Pokemon by Id', () => {
		test('When requesting a Pokemon with ID 1, should return a single pokemon with id 1 and a 200', async () => {
			//Arrange
			const mockData = {
				id: 1,
				name: 'bulbasaur',
				species: {
					name: 'bulbasaur',
					url: 'https://pokeapi.co/api/v2/pokemon-species/1/'
				}
			};

			const getOneSpy = jest.spyOn(Pokedex, 'getPokemonById').mockResolvedValueOnce(mockData);

			const mockReq = {
				params: {
					id: 1
				}
			};

			const mockRes = { status: jest.fn(), json: jest.fn() };

			//Act
			await pokedexController.getPokemonById(mockReq, mockRes);

			//Assert
			expect(getOneSpy).toHaveBeenCalledTimes(1);
			expect(mockRes.status).toHaveBeenCalledWith(200);
			expect(mockRes.json).toHaveBeenCalledWith(mockData);
			getOneSpy.mockRestore();
		});

		test('When requesting a Pokemon with an unexisting id, should return a 404 and an error message', async () => {
			//Arrange
			const mockData = null;

			const getOneSpy = jest.spyOn(Pokedex, 'getPokemonById').mockResolvedValueOnce(mockData);

			const mockReq = {
				params: {
					id: 88995544
				}
			};

			const mockRes = { status: jest.fn(), json: jest.fn() };

			//Act
			await pokedexController.getPokemonById(mockReq, mockRes);

			//Assert
			expect(getOneSpy).toHaveBeenCalledTimes(1);
			expect(mockRes.status).toHaveBeenCalledWith(404);
			expect(mockRes.json).toHaveBeenCalledWith({
				message: 'Pokemon não encontrado'
			});
			getOneSpy.mockRestore();
		});

		test('When something went wrong while calling the model, should return a 500 and an error message', async () => {
			// Arrange
			const getOneSpy = jest.spyOn(Pokedex, 'getPokemonById').mockRejectedValueOnce(new Error());

			const mockReq = {
				params: {
					id: 80
				}
			};

			const mockRes = { status: jest.fn(), json: jest.fn() };

			// Act
			await pokedexController.getPokemonById(mockReq, mockRes);

			// Assert
			expect(getOneSpy).toHaveBeenCalledTimes(1);
			expect(mockRes.status).toHaveBeenCalledWith(500);
			expect(mockRes.json).toHaveBeenCalledWith({ message: 'Algo deu errado' });
			getOneSpy.mockRestore();
		});
	});
});
