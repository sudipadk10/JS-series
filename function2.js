function calculateCartprice(num1,num2,...price) {  // ... is a rest operator which will make an array of all the prices (any number of prices) given while function calling
    return price
}
// console.log(calculateCartprice(200,400,350,600,20));

const user ={
    name: "Singam",
    age: 30,
    city: "Biratnagar"
}

function userDetails(userobj){
    return `The user named ${userobj.name} is ${userobj.age} years old.`
}

// console.log(userDetails(user));