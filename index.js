// const sistemaOperativo = require('./sistemaOperativo.js');
// const path = require('path');
// const process = require('node:process');
// const timers = require('node:timers');
// var myInt = setInterval(function () {
//     console.log("Hello");
// }, 500);
// const fs = require('fs');
// fs.watch("texto.txt", (eventType, filename) => {
//     console.log("\nThe file", filename, "was modified!");
//     console.log("The type of change was:", eventType);
//     fs.readFile('texto.txt', 'utf8', (err, data) => {
//         if (err) {
//           console.error(err);
//           return;
//         }
//         console.log(data);
//       });
//   });
// const http = require("http");
// const server = http.createServer();
// server.listen(3000,function() {
//   console.log('Estamos en los años 3000');
// });
const colors = require('colors');

console.log(colors.trap("Holaaa")); // Drops the bass