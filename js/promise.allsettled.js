const promise1 = new Promise((resolve)=>{
  setTimeout(() => {
    resolve("hello")
  }, 2000);
})
const promise2 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    reject("world")
  }, 3000);
})

Promise.allSettled([promise1,promise2])
.then((result)=>console.log(result))


