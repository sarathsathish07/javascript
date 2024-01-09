// let a=[1,2,3,4,5,6,7,8]
// let b=[]
// let c=[]
// let len = a.length
// for(i=0;i<len;i++){
//   if(a[i]%2==0){
//     b.push(a[i])
//   }else{
//     c.push(a[i])
//   }
// }
// console.log(b);
// console.log(c);

// let a=[1,2,3,4,5,6]
// let b=[]
// let c=[]
// let len= a.length
// for(let i=0;i<len;i++){
//   if(a[i]%2==0){
//     b.push(a[i])
//   }
//   else{
//     c.push(a[i])
//   }
// }
// console.log(b);
// console.log(c);

let a=[1,2,3,4,5,6]
let b= a.filter((x)=>x%2!==0)
console.log(b);