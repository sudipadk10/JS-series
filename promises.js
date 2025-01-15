const myPromise = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Async task");
        resolve() // Resolve the promise (connects to then)
        
    },1000)
})

myPromise.then(()=>{
    console.log("Task 1 completed");
})


// same thing

new Promise((resolve, reject)=>{

    setTimeout(()=>{
        console.log("async task 2");
        resolve();  //if we didn't call resolve .then will not be called.
        
    },2000)
}).then(()=>{
    console.log("Task 2 Completed.");
})


const secondPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async task 3");
        resolve({
            name: "John",
            age: 30,
            email : "john@gmail.com"
        })
        
    },3000)
})

secondPromise.then(function(user){ //we can pass arguments from resolve and we can take it in then .
    console.log("Task 3 complete.");
    console.log(user);
})


const fourthPromsise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Async task 4");
        let error = false;
    
        if (!error) {
            resolve({
                name: "John",
                age: 30,
                email : "john@gmail.com"
            })
        }
        else{
            reject("Error! has occurred");
        }
    }, 4000);
})

fourthPromsise.then((user)=>{
    console.log(user);
    return user.name ; //This value returned from this then is passed to the next then.
   }).then((name)=>{
    console.log(name);
    return("yes")
   }).catch((error)=>console.log(error))
   .then((unknown)=>console.log(unknown))//yes
   .finally(()=>console.log("The promise is either resolved or rejected"))//This executes no matter whatever happens


   const fifthPromise = new Promise((response,reject)=>{
    setTimeout(() => {
        let error = false;
        if (!error){
            response({
                name: "Freedy",
                age : 25,
                email: "freedy@gmail.com"
            })
        }
        else{
            reject("Error has occurred")
        }
    }, 5000);
   })

   async function fifthAsync(){
    try {
       const response =  await fifthPromise
       console.log(response);
       
    } catch (error) {
        console.log(error);
        
    }
   }

   fifthAsync(); 


   //To fetch API
//    async function user() {

//         try {
//            const response = await fetch('https://api.github.com/users/sudipadk10');
//            const data = await response.json();  // The fetch data comes in string format which needs to be converted into json format which also takes time so we added await before it .
//            console.log(data);
//         } catch (error) {
//             console.log("E:",error);
            
//         }
//    }

//    user()

//same task diff method :

fetch('https://api.github.com/users/sudipadk10')
.then((response)=>response.json())  //no need to write return keyword while using arrow function
.then((data)=>console.log(data))
.catch((error)=>console.log(error))