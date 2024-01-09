// let arr=[2,5,4,6,3,7]
// let len=arr.length
// let arr1=[]
// for(let i=0;i<len;i++){
//   let flag=0;
//   for(let j=2;j<arr[i];j++){
//     if(arr[i]%j==0){
//        flag=1
//       break;
//     }
//   }
//   if(flag==0){
//     arr1.push(arr[i]);
//   }
// }
// console.log(arr1);

let a=[1,2,3,4,5,0,6]
let b=[]
let len=a.length
if( a[i]>=1){
for(let i=0;i<len;i++){
  let isPrime=true
  for(let j=2;j<a[i];j++){
    if(a[i]%j==0){
      isPrime=false
      break

    }
  }
  if(isPrime){
    b.push(a[i])
  }
}
}
else{
  console.log("e");
}
console.log(b);