var fs = require('fs');
var filepath = process.argv.slice(2).toString();
// console.log(typeof filepath);
var file = fs.readFileSync(filepath).toString();
// console.log(file);
var newLines = file.split('\n');
// console.log(newLines);
var length = newLines.length;
// console.log(length);
console.log(length - 1);
