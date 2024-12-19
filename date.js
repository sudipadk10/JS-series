
const miti = new Date()
// console.log(miti); //2024-12-19T16:38:36.783Z
// console.log(miti.toString()); //Thu Dec 19 2024 22:23:54 GMT+0545 (Nepal Time)
// console.log(miti.toDateString()); //Thu Dec 19 2024
// console.log(miti.toISOString()); //2024-12-19T16:40:45.437Z
// console.log(miti.toJSON()); //2024-12-19T16:40:45.437Z
// console.log(miti.toLocaleDateString()); //12/19/2024
// console.log(miti.toLocaleString()); //12/19/2024, 10:26:42 PM

const birthday = new Date(2003,7,18,2); // in JS 0 -> January 11-> December
// console.log(birthday.toString()); //Thu Aug 18 2005 02:00:00 GMT+0545 (Nepal Time)

let timestamp = Date.now()
// console.log(timestamp); //Time in milliseconds from 1970 jan 1 to now
// console.log(birthday.getTime());  // Time in milliseconds from 1970 jan 1 to birthday
// console.log(Math.round(timestamp/1000)); //Time in second

// console.log(miti.getMonth()+1); //since 0 is january but normally january is indexed 1.
// console.log(miti.getFullYear());

//You can even customize the date format

console.log(miti.toLocaleString('default',{ weekday : 'long',  year : 'numeric', day : 'numeric', month : 'short'}));


