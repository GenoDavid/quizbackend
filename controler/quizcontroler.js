const asynchandler = require('express-async-handler')
const quizmodel = require('../model/quizmodel')
const creatquiz = asynchandler(async (req, res) => {
    const addquiz = await quizmodel.create({
        ...req.body
    })
    res.status(200).json(addquiz)
})
const getquiz = asynchandler(async (req, res) => {
    const addquiz = await quizmodel.find()
    res.status(200).json(addquiz)
})
module.exports = { creatquiz, getquiz }