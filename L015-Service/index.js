const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const dotEnv = require('dotenv').config()
const repository = require('./persistence/repository')
const port = process.env.PORT
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

repository.createConnection()

// The routes order does matter
app.use('/api/v1/user', require('./route/user'))

// This route handles all other requests
app.use('/', (req, res, next) => {
  res.send('<h1>Hello World API</h1>')
})

app.listen(port, () => {
  console.log(`Hello World API listening on port ${port}`)
})