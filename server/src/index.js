const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
import getQuiz from './get-quiz';
import submitAnswers from './submit-answers';
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())

app.get('/quiz', (req, res) => {
    const quiz = getQuiz({});
    res.send(quiz)
})
app.post('/', function (req, res) {
    res.send('POST request to homepage')
})
app.post('/submitAnswers', (req, res) => {
    console.log(req.body)
    const score = submitAnswers({
        answers: req.body,
    });
    console.log(score);
    res.status(200).send({score});
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})