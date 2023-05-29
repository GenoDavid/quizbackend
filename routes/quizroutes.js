const express = require('express')
const { creatquiz, getquiz } = require('../controler/quizcontroler')
const routs = express.Router()
routs.post('/creat', creatquiz)
routs.get('/get', getquiz)

module.exports = routs
