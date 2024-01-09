function a(success=false){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      if(success){
        resolve("Operation successful")
      }else{
        reject("Operation failed")
      }
    }, 1000);
  })
}
a()
.then((result)=>console.log(result))
.catch((Error)=>console.log(Error))


const promise1 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    const success = true
    if(success){
      resolve("Operation successful")
    }else{
      reject("Operation failed")
    }
  }, 1000);
})
promise1
.then((result)=>console.log(result))
.catch((error)=>console.log(error))





