// let name1 = {
//   firstName:"Sarath",
//   lastName:"Sathish"
// }

// let name2 = {
//   firstName:"Rony",
//   lastName:"Rojen"
// }

// let printName = function(hometown,state){
//   console.log(this.firstName+" "+this.lastName+" from "+hometown+" , "+state);
// }

// printName.call(name1,"thrissur","kerala");
// printName.call(name2,"kochi","kerala");

// printName.apply(name1,["thrissur","kerala"]);
// printName.apply(name2,["kochi","kerala"]);

// let print = printName.bind(name1,"thrissur","kerala")
// print();


const name1={
  firstName:"sarath",
  lastName:"sathish"
}
const name2={
  firstName:"hari",
  lastName:"prasad"
}

let printName=function(hometown,state){
  console.log(this.firstName+" "+this.lastName+" from "+hometown+","+state);
}

printName.call(name1,"thrissur","kerala")
printName.apply(name2,["kochi","kerala"])

let print = printName.bind(name1,"thrisssur","kerala")
print()


