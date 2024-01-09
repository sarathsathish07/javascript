let a=[1,2,3,4,5,6,7]
let b=[]
let len=a.length
let count=0
for(let i=0;i<len;i++){
  for(let j=2;j<a[i];j++){
    if(a[i]%j!==0){
    count++;
    break
  }
}
}
console.log(count);