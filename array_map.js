const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//making array of square of all numbers
const newNum = Numbers.map((n) => n*n)
// console.log(newNum);

// chaining of methods 

// Get even numbers and multiply each by 10
const arr = Numbers.filter((n) => n%2==0).map((n) => n*10)
console.log(arr);
