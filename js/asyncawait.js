// function a(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve("hello")
//     }, 2000);
//   })
// }

// async function b(){
//   console.log("start");
//   const result = await a();
//   console.log(result);
//   console.log("End");
// }
// b();


// function a(success=true){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       if(success){
//         resolve("success")
//       }else{
//         reject("failed")
//       }
//     }, 2000);
//   })
// }

// async function b(){
//   console.log("start");
//   const result = await a()
//   console.log(result);
//   console.log("end");
// }
// b()

const pro = new Promise((res,rej) => {
  setTimeout(() => {
    res("fgghc")
  }, 2000);
  
})

async function b(){
  try{
    console.log("start");
    const result = await pro
    console.log(result);
  }
  catch(error){
    console.log(error);
  }
}
b()