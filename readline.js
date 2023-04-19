const readline = require('readline');
const rL = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rL.question("How do you enjoy Node? ", (answer) => {
    console.log(`Your Answer is : ${answer}`);
});