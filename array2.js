Boy = ["Ram","Hari" , "Deep"]
Girl = ["Sita","Gita" , "Rita"]

// Boy.push(Girl)
// console.log(Boy);
// console.log(Boy[3][1]); //Gita

const Students = Boy.concat(Girl)
// console.log(Students);

const Student = [...Boy,...Girl] //spread 
// console.log(Student);
Marks =[2,3,[4,3],[5,6,[5,6]]]
// console.log(...Marks);
// console.log(Marks.flat(2));

// console.log(Array.isArray(Student));
console.log(Array.from({name:"Ram"})); //To convert object to array we need to specify either key or value to convert otherwise it gives an empty array []
console.log(Array.of(1,2,3,"nice"));
