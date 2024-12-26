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

console.log(a);
console.log(b);
console.log(c);

// The value of var inside the local scope is being accessed from outside of that scope which is not allowed


