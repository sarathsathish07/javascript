

// let a=[1,2,5,2,6,4,3]
// let b=[5,4,8,6,2,1]
// let len1=a.length
// let len2=b.length
// let c=[]

// for(let i=0;i<len1;i++){
//   c[i]=a[i]
// }
// for(let i=0;i<len2;i++){
//   c[len1+i]=b[i]
// }
// console.log(c);

let a=[1,2,3]
let b=[4,5,6]

let c=a.concat(b).sort((a,b)=>a-b)
console.log(c);