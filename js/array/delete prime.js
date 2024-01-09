// let a=[1,2,3,4,5,6,7,8]
// let len=a.length
// for(let i=0;i<len;i++){
//   let isPrime=true
//   for(let j=2;j<a[i];j++){
//     if(a[i]%j==0){
//       isPrime=false
//       break
//     }
//   }
//   if(isPrime){
//     for(k=i;k<len-1;k++){
//       a[k]=a[k+1]
//     }
//     len--
//     i--
//   }
// }
// a.length=len
// console.log(a);

// function isPrime(num){
//   if(num<=1){
//     return false
//   }
//   for(let i=2;i<num;i++){
//     if(num%i==0){
//       return false
//     }
//   }
//   return true
// }


// let a=[1,2,3,4,5]
// let b= a.filter((num)=> !isPrime(num))
// console.log(b);

function isEven(num){
if(num%2==0){
  return true
}else{
  return false
}
}

let a=[1,2,3,4,5]
let b= a.filter((num)=>!isEven(num))
console.log(b);