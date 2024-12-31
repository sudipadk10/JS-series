const price = [20, 10, 15, 5]

const total = price.reduce((a,c)=>{  //a is accumulator and c is current value.
    // console.log(`accumulator : ${a} and current value : ${c}`);
    
    return a + c;  // in every iteration , current value is added to accumulator
},0) //0 is initial value of accumulator .
// console.log("Total price: ",total);

//another method 
// const total2 = price.reduce((a,c)=> a+c,0);
// console.log("Total price: ",total2);

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

const totalPrice = books.reduce( (acc, book) => acc + book.price,0);
console.log("Total price of all books: ",totalPrice);