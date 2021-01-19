const validateEmail = (email) => {
	const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	return emailRegex.test(email);
};

const validatePassword = (password) => {
	const passwordRegex = /^\d+$/; /* Senha pode ter apenas números */
	return passwordRegex.test(password);
};

const validateRole = (role, validRoles) => {
	return validRoles.includes(role);
};

const validateUser = (validRoles) => (email, password, role) => {
	return validateEmail(email) && validatePassword(password) && validateRole(role, validRoles);
};

const factory = (db, validRoles) => ({
	create: create(db),
	validateUser: validateUser(validRoles)
});

const create = (db) => async (username, email, password, role) =>
	db.execute('INSERT INTO solid_example.users (username, email, password, role) VALUES (?,?,?,?)', [
		username,
		email,
		password,
		role
	]);

module.exports = {
	factory
};
