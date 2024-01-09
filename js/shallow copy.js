// const arr1 = [1,2,[3,4]]
// const arr2 = [...arr1]
// arr2[2][0] = 5;
// console.log(arr1);



// const a=[1,2,[3,4]]
// const b=[...a]
// b[2][0]=5
// console.log(a);

const a=[1,2,[3,4]]
const b=JSON.parse(JSON.stringify(a))
b[2][0]=5
console.log(b);