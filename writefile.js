const fs = require('fs');

let md =
    `
 Node is The Best Thing
 ===========================
 ES6 has also the very best stuffs like;
 
 1. Template strings
 2. NodeFile system
 3. Readlines CLIs

`;

fs.writeFile("jscript.md", md.trim(), function () {
    console.log(`All Done ${data}`);
})