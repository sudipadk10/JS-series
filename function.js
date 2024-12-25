function hello(name) {
    console.log(`Hello ${name}`);
}
// hello("World")

function sum(num1 , num2) {
    return (num1+num2);
}
const result = sum(5, 8 );
// console.log("Sum : " ,result);

function login(username) {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;

}
// console.log(login()); //please enter a username
console.log(login("Jimmy"));




