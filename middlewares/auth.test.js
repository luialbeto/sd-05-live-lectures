const checkAuthToken = require('./auth.js');

describe('Middleware', () => {
	describe('Token validation', () => {
		test('When passing an invalid token, should return a 401 with a invalid token message in JSON format', () => {
			//Arrange
			const mockReq = {
				headers: { authorization: '3321lee' }
			};

			const mockRes = { status: jest.fn(), json: jest.fn() };

			const mockNext = jest.fn();
			//Act
			checkAuthToken(mockReq, mockRes, mockNext);

			expect(mockNext).not.toHaveBeenCalled();
			expect(mockRes.status).toHaveBeenCalledWith(401);
			expect(mockRes.json).toHaveBeenCalledWith({ message: 'Token inválido!' });
		});

		test('When passing a valid token, should call the next function', () => {
			//Arrange
			const mockReq = {
				headers: { authorization: 'ABCdEfG123TrlJCk' }
			};

			const mockRes = { status: jest.fn(), json: jest.fn() };

			const mockNext = jest.fn();
			//Act
			checkAuthToken(mockReq, mockRes, mockNext);

			expect(mockNext).toHaveBeenCalled();
			expect(mockRes.status).not.toHaveBeenCalledWith();
			expect(mockRes.json).not.toHaveBeenCalledWith();
		});
	});
});
