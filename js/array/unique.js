


// let a=[1,2,1,4,5,3,6,2,5]
// let len=a.length
// let b=[]
// let count
// for(let i=0;i<len;i++){
//   count=0
//   for(let j=0;j<len;j++){
//     if(i!=j){
//       if(a[i]==a[j]){
//         count=1;
//         break;
//       }
//     }
//   }
//   if(count==0){
//     b.push(a[i])
//   }
// }
// console.log(b);

// let a=[1,2,3,4,5,1,2]
// let b=[]
// let len =a.length
// let flag
// for(let i=0;i<len;i++){
//   flag=0
//   for(j=0;j<len;j++){
//     if(i!=j&&a[i]==a[j]){
//       flag=1;
//       break
//     }
//   }
//   if(flag==0){
//     b.push(a[i])
//   }
// }
// console.log(b);

// const a=[1,1,3,1,2,4,5,6]
// const b= a.filter((value,index,self)=>self.indexOf(value)==index).reduce((acc,curr)=>{return acc=acc+curr},0)
// console.log(b);

let a=[1,2,1,3,4,5,1,2]
let b=[]
let len = a.length
let flag
for(let i=0;i<len;i++){
  flag=0
  for(let j=0;j<len;j++){
    if(i!=j && a[i]==a[j]){
      flag=1
    }
  }
  if(flag==0){
    b.push(a[i])
  }
}
console.log(b);