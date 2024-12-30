const langs = ["python" , "java" , "ruby", "C" ,"javascript"]

//foreach is a method of array which is used to iterate over its values . It needs an callback function which will be executed everytime the loop runs.

//declearing fuction using "function" keyword . This function doesn't contain name but gets an argument (value)

langs.forEach(function (val) {
    // console.log(val); // print each value in the array
})

// using arrow function 
langs.forEach( (val) => {
    // console.log(val); // print each value in the array
})

// using already defined function

function print(val){
    // console.log(val);
}

// langs.forEach(print) //not to call here  "print()" just giving reference of function "print".

// we can also get index 

langs.forEach(function (val , index,arr) {
    if(index%2==0){
        // console.log(val ,arr); //also prints array at each line
    }
})

const books =[
    {
        name : "Computer",
        price : 500
    },
    {
        name : "Science",
        price : 1000
    },
    {
        name : "Maths",
        price : 650
    },
    {
        name : "English",
        price : 750
    }
]

books.forEach((obj)=> {
    console.log(obj.name,"costs",obj.price);
    
})