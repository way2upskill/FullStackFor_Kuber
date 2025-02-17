const fs=require('fs');
fs.appendFile('example.txt','\nAppended text in Async mode',(err)=>{
    if(err)throw err;
    console.log('Content appended');
});
