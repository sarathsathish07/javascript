let obj = {
  a:1,
  b:2,
  c:3
}

for(let key in obj){
  console.log(key,obj[key]);
}

let arr = [1,2,3,4]
for(let value of arr){
  console.log(value);
}
const add = (a,b)=>a+b;
console.log(add(2,3));

