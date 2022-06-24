const path = require('path')
const express = require('express')

const server = express()

const quiz = require('./routes/quiz')
const questions = require('./routes/questions')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/quiz', quiz)
server.use('/api/v1/questions', questions)

module.exports = server
