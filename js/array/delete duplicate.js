// let a=[1,2,1,4,3,5,6,2,1]
// let len =a.length
// for(let i=0;i<len;i++){
//   for(let j=i+1;j<len;j++){
//     if(a[i]==a[j]){
//       for(let k=j;k<len-1;k++){
//         a[k]=a[k+1]
//       }
//       j--
//       len--
//     }
  
//   }
// }
// a.length=len
// console.log(a);

// let a=[1,2,4,3,2,1,5,6,]
// let len=a.length
// for(let i=0;i<len;i++){
//   for(j=i+1;j<len;j++){
//     if(a[i]==a[j]){
//       for(k=j;k<len-1;k++){
//         a[k]=a[k+1]
//       }
//       j--
//       len--
//     }
//   }
// }
// a.length=len
// console.log(a);


let a=[1,2,3,4,1,2,5]
let len= a.length
for(let i=0;i<len;i++){
  for(let j=i+1;j<len;j++){
    if(a[i]==a[j]){
      for(let k=j;k<len-1;k++){
        a[k]=a[k+1]
      
      }
      j--
      len--
    }
  }
}
a.length=len
console.log(a);