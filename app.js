const express = require('express')
const app = express()

const http = require('http')
const { send } = require('process')
const server = http.createServer(app)

const { Server } = require('socket.io')
const io = new Server(server)

io.on('connection', (socket) => {
	//console.log('a user connected')
	// socket.on('disconnect', () => {
	// 	console.log('user disconnected')
	// })

	// socket.on('chat message', (msg) => {
	// 	io.emit('chat message', msg)
	// 	console.log('message: ' + msg)
	// })

	socket.on('chat message', (msg) => {
		io.emit('chat message', msg)
		console.log('message: ' + msg)
	})	
})

app.get('/', (req, res) => {
	//res.send('<h1>Aplication chat</h1>')
	res.sendFile(__dirname + '/index.html')
})

server.listen(3000, () => {
	console.log('Server is running on port http://localhost:3000')
})