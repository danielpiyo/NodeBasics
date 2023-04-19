const fs = require('fs');

fs.mkdir("New-Directory", (err) => {
    if (err) {
        console.log(`Error: ${err}`);
    }
    else {
        console.log("Directory Created succesfully");
    }
});