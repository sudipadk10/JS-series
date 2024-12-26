//The code written outside are global scoped but the code written inside the scope {} are local scoped
// The code or variables in global scope can be accessed from local scope but the variable inside the local scope should not be accessed from outside .

// when we use let and const It follows that rule but when we use var it does not follow that rule.

let a = " let"
const c = " const"
var b = " var"

if (true) {  // scope
   let a = " inside scope"
   const c = " inside scope"
    var b = " inside scope"
}

// console.log(a);
// console.log(b);
// console.log(c);

// The value of var inside the local scope is being accessed from outside of that scope which is not allowed

function one() {
    const first = "one";
    function two() {
        const second = "two";
        console.log(first); // It doesn't give error cause the function two is inside the scope of function  one .
    }
    // console.log(second); // It gives ReferenceError cause second is not defined in the scope of one function cause it is defined inside the two function.
    two();
    
}
// one();

let go = 0
if(go == 1){
    const domain = "github.com"
    if(domain == "github.com"){
    const username = "sudipadk10"
    console.log(domain+"/"+username);
    
    }
    // console.log(username); // It gives ReferenceError 
}
// console.log(domain); //ReferenceError

console.log(addOne(5)); // gives no error even after calling the fuction before it is created
function addOne(num){
    return num+1
}



// console.log(addTwo(5)); //ReferenceError : Cannot access "addTwo" before initialization .
const addTwo = function(num) {
    return num+2;    
}
