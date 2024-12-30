
const numbers = [1,2,3,4,5];
for (const num of numbers) {
    
    // console.log(num);
    
}

const message = "Hello World"
for (const word of message) {
    if (word ==" ") {
        continue;
    }
    // console.log(word)    
}

const myMap = new Map(); //same as object 
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("salary",10000)

for (const row of myMap) {
    // console.log(row); /print both key and value in a array form 
    
}

for (const [key, value] of myMap) { // destructuring of array
    // console.log(key," =>", value); // key and value is separate 
}

//Note:  for of does not work on object .(we got for in for that )
