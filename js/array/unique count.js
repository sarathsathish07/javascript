// let a=[1,2,1,3,4,2,5,6,7]
// let b=[]
// let len=a.length
// let count
// for(let i=0;i<len;i++){
//   count=0
//   for(let j=0;j<len;j++){
//     if(a[i]==a[j]&&i!=j){
//       count=1
//       break
//     }
//   }
//   if(count==0){
//     b.push(a[i])
//   }
// }
// console.log(b.length);

let a=[1,2,3,1,2,4,5]
let b=[]
let len=a.length
let count
for(let i=0;i<len;i++){
  count=0
  for(j=0;j<len;j++){
    if(i!=j&&a[i]==a[j]){
      count=1
      break
    }
  }
  if(count==0){
    b.push(a[i])
  }
}
console.log(b.length);