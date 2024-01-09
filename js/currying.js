function add(x){
  return function(y){
    return function(z){
      return x+y+z
    }
  }
}
const x = add(2)(3)(4)
console.log(x);


