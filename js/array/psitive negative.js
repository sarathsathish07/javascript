// let a=[1,2,-5,-4,3,-6]
// let len=a.length
// let b=[]
// let c=[]
// for(let i=0;i<len;i++){
//   if(a[i]>0){
//     b.push(a[i])
//   }else{
//     c.push(a[i])
//   }
// }
// console.log(c);

let a=[1,0,2,3,-5,-4,-6]
let b=[]
let c=[]
let len=a.length
for(let i=0;i<len;i++){
  if(a[i]!=0){
    if(a[i]<0){
      b.push(a[i])
    }else{
      c.push(a[i])
    }
  }
}
console.log(b);