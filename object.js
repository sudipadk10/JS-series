// const singletonobj = new Object()
// const object_literals = {}

const mysym = Symbol("key")
const obj ={
    name:"Sudip",
    "game zone" : "firifiri" ,// another technique of defining key
    age:25,
    city:"Kathmandu",
    [mysym]:"symbol value" //Way of defining symbol
}
obj.city ="Biratnagar"
// console.log(obj.city); 

// console.log(obj.name); //way 1
// console.log(obj["name"]); //way 2
// console.log(obj["game zone"]);
// console.log(obj.mysym); //undefined !!
// console.log(obj[mysym]); //way to print value of symbol
obj.intro = function(){ //function defining
  const response =  `Hello, my name is ${this.name}.`
    return response
}

console.log(obj.intro());  //function calling
