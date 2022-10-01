const express = require('express')
const app = express()

const http = require('http')
const { send } = require('process')
const server = http.createServer(app)

const { Server } = require('socket.io')
const io = new Server(server)

io.on('connection', (socket) => {
	socket.on('chat message', (msg) => {
		io.emit('chat message', msg)
		console.log('message: ' + msg)
	})	
})

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

server.listen(3000, () => {
	console.log('Server is running on port http://localhost:3000')
})