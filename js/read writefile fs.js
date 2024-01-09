const fs = require('fs')
// fs.readFile('example1.txt','utf-8',(err,data)=>{
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log(data);
// })

fs.writeFile('example1.txt','hello world2','utf-8',(err)=>{
  if(err){
    console.log(err);
    
  }else{
  console.log("data written");}
})
fs.appendFile('example1.txt','hello world3','utf-8',(err)=>{
  if(err){
    console.log(err);
    
  }else{
  console.log("data written");}
})

