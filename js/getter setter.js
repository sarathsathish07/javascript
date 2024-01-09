const obj = {
  name1:"john",
  get name(){
    return this.name1;
  },
  set name(alex){
    this.name1 = alex
  }
}

obj.name = 'Alex'
console.log(obj.name);