const mongoose = require("mongoose")
const quizschema = new mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    totalquestion: {
        type: Number,
        required: true
    },
    perquestionscore: {
        type: Number,
        required: true
    },
    questions: {
        type: [{
            question: String,
            choose: [String],
            correctanswer: String
        }]
    }
})
module.exports = mongoose.model('quiz', quizschema)