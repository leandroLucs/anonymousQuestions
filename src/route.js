const express = require('express')
const route = express.Router()
const questionController = require('./controller/questionController')
const roomController = require('./controller/roomController')

route.get('/', (req, res) => res.render('index', { page: 'enter-room' }))
route.get('/room/:room', (req, res) => res.render('room'))
route.get('/create-pass', (req, res) =>
  res.render('index', { page: 'create-pass' })
)
route.post('/question/:room/:question/:action', questionController.index)
route.post('/create-room', roomController.create)

module.exports = route
