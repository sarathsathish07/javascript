

let a=[1,2,3,1,2,4,5,6,3]
let b=[]
let len=a.length
let count
for(let i=0;i<len;i++){
  count=1
  for(let j=0;j<len;j++){
    if(a[i]!=-1&&i!=j){
      if(a[i]==a[j]){
        count++
        break
      }
    }
   
  } b.push(count)
  
}
console.log(b);