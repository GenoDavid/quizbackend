const usermodule = require("../model/usermodule")

const creatquiz = asynchandler(async (req, res) => {
    const addquiz = await usermodule.create({
        ...req.body
    })
    res.status(200).json(addquiz)
})
module.exports = { creatquiz }