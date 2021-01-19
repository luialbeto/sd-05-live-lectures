const createUser = (User) => async (req, res) => {
	const { username, email, password, role } = req.body;

	if (User.validateUser(email, password, role, username, role)) {
		await User.create(username, email, password, role);
		res.status(200).json({
			message: 'Usuário criado com sucesso!'
		});
	} else {
		res.status(400).json({
			message: 'Dados inválidos.'
		});
	}
};

module.exports = { createUser };
