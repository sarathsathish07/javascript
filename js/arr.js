let arr = [1,2,3,4]
let len=arr.length
for(let i=0;i<len;i++){
  for(let j=i+1;j<len;j++){
    if(arr[i]<arr[j]){
      let temp = arr[i];
      arr[i]=arr[j];
      arr[j]=temp;
    }
  }
}
console.log(arr[0]);


let arr1 = [1,2,3,4,5]
let max=arr1[0]
for(let i=1;i<arr1.length;i++){
  if(arr1[i]>max){
    max=arr1[i]
  }
}
console.log(max);