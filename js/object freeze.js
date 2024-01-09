const person = {
  name : "john",
  age : 25
}
const x = Object.freeze(person)
x.name = "alex"
console.log(x);

