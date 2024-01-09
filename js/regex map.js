const a=[1,2,1,3,4]
const n=3
let len = a.length
for(let i=3;i<len-1;i++){
  a[i]=a[i+1]
  len--
}
a.length=len
console.log(a);