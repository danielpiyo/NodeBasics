const fs = require('fs');

let ipsum = fs.readFileSync('./README.md', 'UTF-8');

console.log(ipsum);

fs.readFile('./README.md', 'UTF-8', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
})

console.log("Wants to read");