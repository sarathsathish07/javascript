const promise1 = new Promise((resolve)=>setTimeout(() => {
  resolve("hello")
}, 1000))
const promise2 = new Promise((resolve,reject)=>setTimeout(() => {
  reject("world")
}, 3000))

Promise.all([promise1,promise2])
.then((result)=>console.log(result))
.catch((Error)=>console.log(Error))