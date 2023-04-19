const readline = require('readline');
const rL = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const questions = [
    "What is your Name? ",
    "Where do you leave? ",
    "Why do you Enjoy Node? "
]

function getAnswers(questions, done) {
    const answers = [];
    const questAnswered = (answer) => {
        answers.push(answer.trim());

        if (answers.length < questions.length) {
            rL.question(questions[answers.length], questAnswered);
        } else {
            return done(answers);
        }
    }
    rL.question(questions[0], questAnswered);
}

getAnswers(questions, (answers) => {
    console.log("Thank you for your Answers");
    console.log(answers);
    process.exit();
})