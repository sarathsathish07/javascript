// const arr = [1,2,3,4,5,2,4,6,8,5]
// const a = arr.filter((value,index,self)=>{
//   return self.indexOf(value) === index
// })
// console.log(a);

const a=[1,2,3,4,5]
const b=a.reduce((acc,curr)=>{
  return acc=acc+curr
},0)
console.log(b);