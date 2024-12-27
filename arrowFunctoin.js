
const user = {
    name: "Singam",
    age: 30,
    city: "Biratnagar",
    greeting: function() {
        console.log(`Hello, my name is ${this.name}.`);
        console.log(this); // 'this' prints the details of current context
        
    }
}

// user.greeting();
// user.name = 'John'; // change the name in the object user .
// user.greeting(); //different output cause context changed.

// console.log(this); //In node module 'this' in default refers to an empty object since there is no current context .


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const display = function(){
    let result = "nice";
    console.log(this); // In the context of funtion 'this' refers to global object 
    console.log(this.result); //undefined  -> we can't access the variables using 'this'.
    
}

// display();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//arrow function
const show = () => { 
    let result = "nice";
    console.log(this);  // print empty object
}

// show();


// explicit return
const sum = (num1 , num2) => {
    return num1 + num2;
}

//implicit return
const sum2 = (num1 , num2) => (num1 + num2);

console.log(sum(5, 8));
console.log(sum2(3,4));
