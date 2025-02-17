const fs=require('fs');
fs.writeFile('example.txt','Hello Kuber, This is Async File creation',(err)=>{
    if(err){
        throw err;
    }
    console.log("File created successfully");
})