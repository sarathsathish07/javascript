// // let a=[1,2,3,4,5,6,7,8,9]
// // let b=[]
// // let c=[]
// // let len=a.length
// // for(let i=0;i<len;i++){
// //   let isPrime=false
// //   for(j=2;j<a[i];j++){
// //     if(a[i]%j==0){
// //     isPrime=true
// //     break
// //   }
// // }

// //   if(isPrime){
// //     b.push(a[i])
// //   }else{
// //     c.push(a[i])
// //   }
// // }
// // console.log(b);
// // console.log(c);

// // let a=[1,2,3,4,5,6,7,8]
// // let b=[]
// // let c=[]
// // let len=a.length
// // for(let i=0;i<len;i++){
// //   let isPrime=false
// //   for(let j=2;j<a[i];j++){
// //     if(a[i]%j==0){
// //       isPrime=true
// //       break
// //     }
// //   }
// //   if(isPrime){
// //     b.push(a[i])
// //   }else{
// //     c.push(a[i])
// //   }
// // }

// // console.log(c);

// let a=[1,2,3,4,5,6,7,8,9]
// let len=a.length
// let b=[]
// let c=[]
// for(let i=0;i<len;i++){
//   let isprime=true
//   for(j=2;j<a[i];j++){
//     if(a[i]%j==0){
//     isprime=false
//     break
//   }
// }
// if(isprime){
//   b.push(a[i])
// }else{
//   c.push(a[i])
// }
// }
// console.log(c);


let a=[1,2,3,4,5,6]
let b=[]
let len =a.length
for(let i=0;i<len;i++){
  let isPrime=true
  if(a[i]<=1){
    isPrime=false
  }else{
    for(let j=2;j<a[i];j++){
      if(a[i]%j==0){
        isPrime=false
        break
      }
    }
  }
  if(isPrime){
    b.push(a[i])
  }
}
console.log(b);