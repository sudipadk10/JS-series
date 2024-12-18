/*
Datatypes 
1.premitive => Number,string,Boolean,Symbol,BigNumber,null,Undefined
->Stack

2.Non- Premitive => Array,Function , Object
->Heap
*/

// //Stack
// let myname = "Sudip"
// let anothername = myname

// anothername = "Adhikari"
// console.log(myname);
// console.log(anothername);
//since we get only copy of real data the original data remain same.

//Heap

let data ={
    name:"Sudip",
    age:30
}

let details = data
details.name = "skidy"
console.log(data.name);
console.log(details.name);
console.log(details);
//In heap both varible access same data . So if one variable changed then all other variable also affected


