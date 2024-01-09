// let arr=[1,2,3,4,5]
// let len = arr.length
// let largest=arr[0]
// let smallest=arr[0]
// for(i=1;i<len;i++){
//   if(arr[i]>largest){
//     largest=arr[i]
//   }
//   if(arr[i]<smallest){
//     smallest=arr[i]
//   }
// }
// console.log(largest,smallest);


// let a=[1,2,3,4,5,6]
// let large=a[0]
// let small=a[0]
// let len = a.length
// for(let i=1;i<len;i++){
//   if(a[i]<small){
//     small=a[i]
//   }
//   if(a[i]>large){
//     large=a[i]
//   }
// }
// console.log(small,large);

// let a=[1,2,3,4,5]
// let len=a.length
// let large =a[0]
// let small=a[0]
// for(let i=0;i<len;i++){
//   if(a[i]>large){
//     large=a[i]
//   }
//   if(a[i]<small){
//     small=a[i]
//   }
// }
// console.log(large,small);

let a=[1,2,3,4,5]
let b= a.reduce((min,curr)=>curr<min?curr:min,a[0])
console.log(b);