// Immidiately Invoked function expression (IIFE)

//named IIFE
(function Hello() {
        console.log("Hello");
})(); //this need to closed explecitly using ; to execute another IIFE 

//simple IIFE
( (name) => {
    console.log(`Hello ${name}`);
})("world");