
const myarray =  [1, 2, 6,5,3,4];
const A = new Array("a","e","i","o","u",10,true) //array in javascript can hold different data types
// console.log(myarray[2]); //3

// Array Mrthods :
// console.log(myarray.length); //5
myarray.push(7)
// console.log(myarray);
myarray.pop()
// console.log(myarray);

myarray.unshift(0) //same as push but in reverse order
// console.log(myarray) 
myarray.shift() //same as pop
// console.log(myarray)

// console.log(myarray.includes(5)); //true
// console.log(myarray.indexOf(5)); // 4

// console.log( typeof myarray.join()); //converts array into string

//slice and splice 
console.log("\nArray: ",myarray);

const A1 =myarray.slice(2,5)  //its a copy piece from the array and it doesn't include value of last index
console.log("Slice :\n",A1);
console.log("Array: ",myarray);

const A2 = myarray.splice(2,5) //its a cut piece from the array and it also includes value of last index
console.log("\nSplice :\n",A2);
console.log("Array: ",myarray);