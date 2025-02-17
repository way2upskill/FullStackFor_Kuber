const fs=require('fs');
fs.appendFileSync('example.txt','\nAppended text in async mode');
console.log('Content appended');