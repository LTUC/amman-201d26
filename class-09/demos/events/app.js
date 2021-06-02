'use strict';

// add an event for the button

let container= document.getElementById('container');


let button=document.getElementById('btn');

console.log(button);

button.addEventListener('click',makeParagraph);

function makeParagraph() {
    
    // for (let i = 0; i < 5; i++) {
        
        
    let para=document.createElement('p');
    
    container.appendChild(para);
    
    para.textContent='hello from JS';


    // }
    // alert('button clicked');
    // button.removeEventListener('click',makeParagraph);
}
// makeParagraph();



// change the paragraph text from lorem to welcoming message:

// get the element:
let paraElement=document.getElementById('paragraph');


// add event listener
paraElement.addEventListener('mouseover',changingText);

paraElement.addEventListener('mouseleave',changingTextBack);


// making the function

function changingText() {
    paraElement.textContent='changed text from JS';
}


function changingTextBack() {
    paraElement.textContent='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque beatae inventore magni, ipsam dicta asperiores aspernatur similique ab sapiente qui ipsa consequatur numquam molestias et labore atque quas! Blanditiis, sapiente?';
}

