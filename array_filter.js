const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Filter numbers greater than 5

// const newNumbers = numbers.filter( (n) => n>5)  //used arrow funtion 

const newNumbers = numbers.filter( (n) =>{   // we can also write like this .
    return n>5;                                                         
})


// console.log(newNumbers);

// We are being able to return value from the funtion in filter while we can't in for each

const newN = numbers.forEach( (n) => n>5)

// console.log(newN); // undefined. It will not return any value. It will just run the funtion for each element in the array. 

//doing same task using for each

const newarray =[]
numbers.forEach( (n) =>{
        if(n>5){
        newarray.push(n);
    }
})
console.log(newarray);




const userDetails = [
    { name: "John", age: 25 , country : "Us" },
    { name: "Jane", age: 30 , country : "France" },
    { name: "Sam", age: 28 , country : "Germany" },
    { name: "David", age: 32 , country : "Us" },
    { name: "Mike", age: 27 , country : "Australia" },
    { name: "Sarah", age: 35 , country : "France" },
    { name: "Emma", age: 22 , country : "Germany" },
    { name: "Lisa", age: 38 , country : "Us" }
]
    

// Filter users whose age is greater than 30 and country is US
const filteredUser = userDetails.filter( (user) =>  user.age > 30 && user.country == "Us");
// console.log(filteredUser);



