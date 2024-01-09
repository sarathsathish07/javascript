function* gen(){
  yield "hello"
  yield "world"
}

const a = gen();
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);



