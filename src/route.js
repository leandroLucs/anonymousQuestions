const express = require('express')
const route = express.Router()
const questionController = require('./controller/questionController')
const roomController = require('./controller/roomController')

route.get('/', (req, res) => res.render('index', { page: 'enter-room' }))
route.get('/create-pass', (req, res) =>
  res.render('index', { page: 'create-pass' })
)

route.post('/create-room', roomController.create)
route.get('/room/:room', roomController.open)
route.post('/enter-room', roomController.enter)

route.post('/question/create/:room', questionController.create)
route.post('/question/:room/:question/:action', questionController.index)

module.exports = route
