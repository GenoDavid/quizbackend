const express = require('express')
const connectingdp = require('./config/connectingdp')
const routs = require('./routes/quizroutes')
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express()

const port = process.env.PORT
connectingdp()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(cors({ origin: '*' }))
app.use('/admin', routs)
app.listen(port, () => { console.log(`'connecting server' + ${port}`) })
