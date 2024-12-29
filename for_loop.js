
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// for(let i=1;i<=5;i++){
//     let output = "";
//     for(let j=1;j<=i;j++){
//         output = output + " "+j;
//     }
//     console.log(output);
// }


// break and continue 
// break stops the loop and continue just skips the current iteration and moves to the next one 

// for (let i=1;i<=5;i++){
//     if(i==3){
//         console.log("3 detected");
        
//         break;
//     }
//     console.log(i);
// }


for (let i=1;i<=5;i++){
    if(i==3){
        console.log("3 detected");
        
        continue;
    }
    console.log(i);
}

