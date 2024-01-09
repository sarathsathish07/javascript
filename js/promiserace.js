const promise1 = new Promise((resolve)=>{
  setTimeout(() => {
    resolve("hello")
  }, 2000);
})
const promise2 = new Promise((reject)=>{
  setTimeout(() => {
    reject("hello")
  }, 500);
})
Promise.race([promise1,promise2])
.then((result)=>console.log(result))
.catch((error)=>console.log(error))