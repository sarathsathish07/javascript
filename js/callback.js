function sum(a,b,callback){
  let result = a+b;
  callback(result);
}
function display(result){
  console.log(result);
}

sum(10,5,display)


