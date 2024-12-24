const Student ={
    student_id : 101,
    student_name : 'Sudip',
    student_age : 25,
    student_address : 'Kathmandu'
}

// console.log(Student.student_name); //one technique to access value .

// we have another technique to access the value of object using "Destructuring"

const {student_name : name} = Student // destructuring
console.log(name); //Sudip

//JSON -> javascript object notation are data fetched from API 
// same as object but it is not assigned to any variable and key are also treated as string
// {
//     "student_id" : 101,
//     "student_name" : "Sudip",
//     "student_age" : 25,
//     "student_address" : "Kathmandu"
// }