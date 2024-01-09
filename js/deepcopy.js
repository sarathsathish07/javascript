const { json } = require("stream/consumers");

const arr1 = [1,2,[3,4]]
const arr2 = JSON.parse(JSON.stringify(arr1))
arr2[2][0]=5
console.log(arr1);

