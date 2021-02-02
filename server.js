const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const socketIoServer = require('http').createServer();
const io = require('socket.io')(socketIoServer, {
	cors: {
		origin: 'http://localhost:3000',
		methods: [ 'GET', 'POST' ]
	}
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/client.html');
});

app.post('/notify', (req, res) => {
	const { title, message } = req.body;

	if (!title || !message) {
		return res.status(422).json({ message: 'Missing title or message' });
	}

	io.emit('notification', { title, message });

	res.status(200).json({ message: 'Notification emitted' });
});

app.get('/ping', (_, res) => {
	res.status(200).json({ message: 'pong!' });
});

app.listen(3000, () => console.log('Express: rodando na porta 3000...'));

socketIoServer.listen(4555, () => console.log('Socket.io: ouvindo na porta 4555'));
