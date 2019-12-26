const http = require('http');
const links = require('../src/links.json');
const arr = links.dev;
const pathNames = [
    "index",
    "photos",
    "portraits",
    "summerculture",
    "places",
    "home",
    "about",
    "contact",
    "writing"
];

for (let i = 0; i < pathNames.length; i++) {
    let path = arr[pathNames[i]];
    let options = {
        hostname: 'localhost',
        port: 3000,
        path: path,
        method: 'GET'
    };
    let req = http.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`);
      
        res.on('data', d => {
          console.log(path);
          process.stdout.write(d.statusCode);
        });
    });
    req.on('error', error => {
        console.error(error);
    })
      
    req.end();
}