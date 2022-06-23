const path = require('path')
const express = require('express')
// const cors = require('cors')

// const welcome = require('./routes/welcome')
const quiz = require('./routes/quiz')

const server = express()

// server.use(cors({ origin: 'https://localhost:3000' }))

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// server.use('/api/v1/welcome', welcome)
server.use('/api/v1/quiz', quiz)

module.exports = server
