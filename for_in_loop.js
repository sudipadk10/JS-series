const myObject = {
    name: "John",
    age: 30,
    city: "Biratnagar"
}

for (const key in myObject) { // It iterates only keys .
   
    // console.log(key,"=>",myObject[key]);
}


// for in  Array
const arr = ["sunya", "ekki" , "dukki" , "tirki"]
for (const key in arr) { // default key for array is its index starting from 0
    // console.log(key,"=>",arr[key]); // it prints index as well as value
}

const str = "gandu gyani"
for (const key in str) {
//    console.log(key,"=>",str[key]);
}

//Note : for in doesn't work on map