// let arr=[1,1,2,3,4,3,2]
// let len =arr.length;
// let count=0;
// for(let i=0;i<len;i++){
//   for(j=i+1;j<len;j++){
//     if(arr[i]==arr[j]){
//       count++;
//       break;
//     }
//   }
// }
// console.log(count);



let a=[1,2,1,3,4,2,5,6,5,6,1]
let len=a.length
let count=0
for(let i=0;i<len;i++){
  for(j=i+1;j<len;j++){
    if(a[i]==a[j]){
      count++
      break
    }
   
  }
}
console.log(count);