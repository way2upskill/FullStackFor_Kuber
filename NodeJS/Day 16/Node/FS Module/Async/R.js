const fs=require('fs');
const data=fs.readFile('example.txt','utf-8',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('File Content:',data);
});
