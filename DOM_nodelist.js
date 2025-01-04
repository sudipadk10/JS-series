// This file is just to note the query which we can run on browser console .

document.getElementById('anything') //display all the elements on that id 
document.getElementById('anything').innerText = 'new text' // change the text of the element
document.getElementById('anything').style.color = 'red' // change the color of the text
document.getElementById('anything').className //display name of class of element having that id 


//get and set attributes
document.getElementById('anything').getAttribute('class') //display name of class
document.getElementById('anything').setAttribute('class', 'newClass') //change the class


//displaying content
const title = document.getElementById('title')
title.textContent //display all the content 
title.innerText  // dislay the content only which is going to be displayed
title.innerHTML // display the content with html tags
//we can change the content by assigning values to it 
title.innerHTML = '<h1>new title</h1>' // change the content with html tags

//qeuryselector

document.querySelector('ul') // display the first element that are in ul tags
document.querySelectorAll('ul') // display all the elements that are in ul tags

document.querySelector('.classname') //element having class='classname'
document.querySelectorAll('#thisid') //element having id='thisid'

document.querySelector('input[type="password"]') //select input element of type 'password'

//nodelist

const li = document.querySelectorAll('li')  //li is a nodelist
li[0].innerText // display the first element of li
li[1].innerText // display the second element of li

//array and nodelists looks similar but not same . nodelist have limited methods/

//we can convert nodelist to array

const myarray = Array.from(mynodelist)


const allSpan = document.querySelectorAll('span')
allSpan.forEach( (s,i) => {
    if(i % 2 == 0){
        s.style.color = 'red'
    }
    else{
        s.style.color = 'blue'
    }
})

