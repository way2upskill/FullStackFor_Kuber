const fs= require('fs');
fs.rename=('example.txt','ex1.txt',(err)=>{
    if(err)throw err;
    console.log("File renamed");
});