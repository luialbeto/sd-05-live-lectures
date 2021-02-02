const net = require('net');
const port = 2708;

const sockets = [];
let usuarioId = 0;

const server = net.createServer((socket) => {
	usuarioId++;

	socket.guest = 'Usuario' + usuarioId;
	sockets.push(socket);
	socket.write('Bem vindo ao chat!');

	disparo(socket.guest, socket.guest + 'Entrou no Chat.');

	socket.on('end', () => {
		sockets.splice(sockets.indexOf(socket), 1);
		const message = socket.guest + ' deixou o chat\n';

		disparo(socket.guest, message);
	});

	socket.on('data', (data) => {
		const message = socket.guest + '> ' + data.toString();

		disparo(socket.guest, message);
	});

	socket.on('error', (error) => {
		console.log('Erro no socket: ', error.message);
	});
});

const disparo = (from, message) => {
	sockets.forEach((socket, index, array) => {
		if (socket.guest === from) return;

		socket.write(message);
	});
};

server.listen(port, () => {
	console.log('O webchat está funfando!');
});
