const User = {
    email : "user@example.com",
    name :{
        first : "John",
        last : "Doe"
    },
}
User.address = {
    street : "123 Main St",
    city : "New York",
    state : "NY",
    zip : "12345"
}

// console.log(User.address.city);


const obj1 = {
    1 : "a",
    2 : "b",
    3 : "c"
}
const obj2 = {
    3 : "d",
    5 : "e",
    6 : "f"
}
const obj3 = Object.assign({},obj1, obj2); // {} is target and other obj1 , obj2 are sources .All the key and value of the source object are assigned to the target object and which is saved in new object ( obj3).
// console.log(obj3);

// const obj4 = Object.assign(obj1, obj2); //If we do this then the key and valur of obj2 are assigned to obj1 and return to obj4 which means that obj1 and obj4 become the same.
// console.log(obj1);
// console.log(obj4);


const obj5 = {...obj1,...obj2}; //... spread operator is used to merge two or more objects.
// console.log(obj5);

const name = "sudip";
const array = {...name};
// console.log(array); // { '0': 's', '1': 'u', '2': 'd', '3': 'i', '4': 'p' }

// console.log(User);
// object to array 

// console.log(Object.keys(User)); // make an array of all keys in the object
// console.log(Object.values(User)); // make an array of all values in the object
// console.log(Object.entries(User)); // make an array of all [key, value] pairs in the object

// console.log(User.hasOwnProperty('name')); //true
// console.log(User.hasOwnProperty('contact')); // false



